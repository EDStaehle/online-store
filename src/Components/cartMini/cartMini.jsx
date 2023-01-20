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
import { When } from 'react-if';
import './cart.scss';
const CartMini = () => {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  return (
    <>
      <When condition={cart.length > 0}>
        <div className='simple-cart'>
          <ul>
            {cart.map((product, index) => (
              <li key={`cart-${index}`}>
                {product.name}
                <span onClick={() => dispatch(removeItemFromCart(product))}>
                  x
                </span>
              </li>
            ))}
          </ul>
        </div>
      </When>
    </>
  );
};
export default CartMini;
