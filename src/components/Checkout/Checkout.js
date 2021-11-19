import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import Review from './Review';
import { MiContext } from '../../context/MiContext'
import Swal from 'sweetalert2';
import { getFirestore } from '../../firebase/config';
import firebase from 'firebase';
import 'firebase/firestore';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Street Wear
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Dirección de entrega', 'Resumen de la compra'];


const theme = createTheme();


export default function Checkout() {

  const {carrito, removeAllFromCart} = React.useContext(MiContext);

  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  })

  const validateInputs = (pedidos) => {
    if (values.firstName === '' || values.lastName === '' || values.address === '' || values.city === '' || values.state === '' || values.zip === '' || values.country === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, llena todos los campos',
      })
      return false;
    }
    return true;
  }

  const [orden, setOrden] = React.useState(); 

  const [hayStock, setHayStock] = React.useState(false);

  const handleError = (err) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: err.message,
    })
  }

  const handleSubmit = (e) => {

    setOrden({
      buyer: {
        ...values
      },
      items: carrito,
      total: carrito.reduce((acc, item) => acc + item.price, 0),
      date: firebase.firestore.Timestamp.fromDate(new Date())
    })

    const db = getFirestore();
    const orders = db.collection('orders');


    carrito.forEach(item => {
      const dockRef = db.collection('stock').doc(item.id);

      dockRef.get()
      .then((doc) => {
          if(doc.data().stock >= item.cantidad){
            setHayStock(true);
            dockRef.update({
              stock: doc.data().stock - item.amount
            })
        } else {
          setHayStock(false);

          Swal.fire({
            title: 'Ooops..',
            text: "Se acabo el stock del producto",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Volver al inicio'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = '/';
            }
          })

          // Swal.fire({
          //   icon: 'error',
          //   title: 'Oops...',
          //   text: 'No hay suficiente stock',
          // })
          // removeAllFromCart();
          
        }
      }) 
    })


    if(hayStock){

    orders.add(orden)
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Compra realizada',
          text: `Guarde su número de orden: ${res.id}`,
        })
      })

      .catch((err) => handleError(err))


      .finally(() => {
        removeAllFromCart();
      })
    }


  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm values={values} setValues={setValues}/>;
      case 1:
        return  <Review orden={orden}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (!validateInputs(values)) return;
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

 

  return (

    <>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: 'relative',
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              STREET WEAR
            </Typography>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length  ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Gracias por tu compra {`${orden.buyer.firstName}`}!
                  </Typography>
                  <Typography variant="subtitle1">
                    Tu compra ha sido realizada con éxito. {`Se enviará a la dirección ${(orden.buyer.address).toUpperCase()}.`}
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Volver
                      </Button>
                    )}

                    <>
                      {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{ mt: 3, ml: 1 }}
                      disabled = {hayStock}
                    >
                      {'Finalizar Compra'}
                    </Button>
                      ) : (
                        <Button
                          onClick={handleNext}
                          variant="contained"
                          sx={{ mt: 3, ml: 1 }}
                        >
                          Siguiente
                        </Button>
                      )}
                    </>

                  </Box>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
          <Copyright />
        </Container>
      </ThemeProvider>
    </>
  )
}
