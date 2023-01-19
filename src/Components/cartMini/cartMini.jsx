import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../../store/cartMini';
import {
  Paper,
  Card,
  Button,
  Typography,
  CardActions,
  CardContent,
  Box,
} from '@mui/material';

const CartMini = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart, 'you are here');
  const dispatch = useDispatch();
  return (
    <>
      <h2>Cart</h2>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper
          sx={{
            position: 'static',
          }}
        >
          {cart.map((product, index) => (
            <article key={`product-${index}`}>
              <p>{product.name}</p>
              <Typography variant='body2' color='text.secondary'>
                Price: ${product.price}
              </Typography>
              <Button
                size='small'
                onClick={() => dispatch(removeItemFromCart(product))}
              >
                X
              </Button>
            </article>
          ))}
        </Paper>
      </Box>
    </>
  );
};
export default CartMini;
