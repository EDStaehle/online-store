import { useState } from 'react';
import { Button } from '@mui/material';
import './styles.scss';
const BillingForm = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className='forms'>
        <form className='address'>
          <h3>Billing Address</h3>
          <div></div>
          <div>
            <label htmlFor='fullName'></label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              placeholder='Full Name'
              value={formValues.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='address'></label>
            <input
              type='text'
              id='address'
              name='address'
              placeholder='Address'
              value={formValues.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='city'></label>
            <input
              type='text'
              id='city'
              name='city'
              placeholder='City'
              value={formValues.city}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='state'></label>
            <input
              type='text'
              id='state'
              name='state'
              placeholder='State'
              value={formValues.state}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='zip'></label>
            <input
              type='text'
              id='zip'
              name='zip'
              placeholder='zip'
              value={formValues.zip}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <form className='card'>
          <h3>Payment Details</h3>
          <div>
            <label htmlFor='cardNumber'></label>
            <input
              type='text'
              id='cardNumber'
              name='cardNumber'
              placeholder='Credit Card #'
              value={formValues.cardNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='expirationDate'></label>
            <input
              type='text'
              id='expirationDate'
              name='expirationDate'
              placeholder='mm/dd/yyyy'
              value={formValues.expirationDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='cvv'></label>
            <input
              type='text'
              id='cvv'
              name='cvv'
              placeholder='CVV'
              value={formValues.cvv}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <Button type='submit'>Checkout</Button>
      </div>
    </>
  );
};

export default BillingForm;
