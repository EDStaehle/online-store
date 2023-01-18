import { connect } from 'react-redux';
import * as React from 'react';
import {
  Paper,
  Card,
  Button,
  Typography,
  CardActions,
  CardContent,
  Box,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/actions';

const CartMini = () => {
  const { cartMini } = useSelector((state) => state);
  console.log(cartMini.inCart, 'you are here');
  const dispatch = useDispatch();
  const display = cartMini.inCart.filter(
    (product) => product.category === cartMini.inCart.category,
  );
  console.log(display, 'this is out of the map');

  let header = 'cartMini';

  return (
    <>
      <h2>{header}</h2>
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
          {cartMini.inCart.map((product, index) => (
            <article key={`product-${index}`}>
              <p>{product.name}</p>
              <Typography variant='body2' color='text.secondary'>
                Price: ${product.price}
              </Typography>
              <Button size='small'>X</Button>
            </article>
          ))}
        </Paper>
      </Box>
    </>
  );
};
export default CartMini;
