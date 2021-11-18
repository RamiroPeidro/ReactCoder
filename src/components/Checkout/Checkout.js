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

  const {carrito} = React.useContext(MiContext);

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

  const handleSubmit = (e) => {

    setOrden({
      buyer: {
        ...values
      },
      items: carrito,
      total: carrito.reduce((acc, item) => acc + item.price, 0)
    })
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
    handleSubmit();
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };



  return (
    carrito.length > 0 ? (
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
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Gracias por tu compra {`${orden.buyer.firstName}`}!
                  </Typography>
                  <Typography variant="subtitle1">
                    Tu compra ha sido realizada con éxito. {`Se enviara a la direccion ${orden.buyer.address}`}
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

                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === steps.length - 1 ? 'Finalizar Compra' : 'Siguiente'}
                    </Button>
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
    : <h1>No hay productos</h1>
  )
  
}
