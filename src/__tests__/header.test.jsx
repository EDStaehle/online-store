import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from '../components/Header/Header';
import '@testing-library/jest-dom';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Header', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      cart: {
        cart: [],
      },
    });
  });

  it('renders cart', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    const cart = screen.getByText('CART (0)');
    expect(cart).toBeInTheDocument();
  });

  it(' items in the cart updates ', () => {
    store = mockStore({
      cart: {
        cart: [{ id: 1 }, { id: 2 }],
      },
    });
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    const cart = screen.getByText('CART (2)');

    expect(cart).toBeInTheDocument();
  });
});
