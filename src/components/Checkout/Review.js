import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { MiContext } from '../../context/MiContext';




export default function Review() {

  const {carrito} = React.useContext(MiContext)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen de la compra
      </Typography>
      <List disablePadding>
        {carrito.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={`${product.name} (${product.amount})`} secondary={(product.description).toUpperCase()} />
            <Typography variant="body2">${product.price * product.amount}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          ${carrito.reduce( (total, product) => total + product.price * product.amount, 0)}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
