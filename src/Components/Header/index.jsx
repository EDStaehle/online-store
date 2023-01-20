import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material';
import CartMini from '../cartMini/cartMini';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { showCart } from '../../store/actions';
const Header = () => {
  const { cart } = useSelector((state) => state);
  const showing = cart;
  const dispatch = useDispatch();
  // const handleClick = () => {
  //   dispatch(showCart());
  // };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            mb: 3,
            position: 'static',
            height: 50,
            backgroundColor: '#f5f5f5',
            boxShadow: 'sm',
          }}
        >
          <Toolbar>
            <Typography
              variant='h6'
              component='div'
              sx={{
                color: 'black',
                flexGrow: 1,
              }}
            >
              Super Cool Store
            </Typography>
            <Link to='/cart' default>
              Cart
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Header;
