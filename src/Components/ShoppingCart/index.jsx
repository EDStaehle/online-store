import { Button, Card } from '@mui/material/';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, addToCart } from '../../store/cartMini';
import './styles.scss';
import BillingForm from './billingForm';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart.cart);
  const dispatch = useDispatch();

  let checkout = Object.entries(cart.cart).map(
    ([product, { name, inStock, _id, price }]) => ({
      name,
      inStock,
      _id,
      price,
    }),
  );
  console.log(checkout);

  const total = checkout.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className='cartCont'>
        <div>
          <h3>Order Summary</h3>
          {checkout.map((checkout, index) => (
            <article key={`category-${index}`}>
              <p>Item: {checkout.name}</p>
              <p>Price: ${checkout.price}</p>
              <Button
                color='error'
                className='removeCart'
                onClick={() => dispatch(removeItemFromCart())}
              >
                Remove From Cart
              </Button>
              <Link to={`/product/${checkout._id}`}>
                <Button size='small'>View Details</Button>
              </Link>
            </article>
          ))}
          {checkout.length ? <p>Total: ${total}</p> : null}
        </div>
        {checkout.length ? <BillingForm></BillingForm> : null}
      </div>
    </>
  );
};

export default Checkout;
