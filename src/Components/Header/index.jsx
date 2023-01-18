import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material';
import CartMini from '../cartMini/cartMini';
import { useDispatch, useSelector } from 'react-redux';
import { showCart } from '../../store/actions';
const Header = () => {
  const { cartMini } = useSelector((state) => state);
  const showing = cartMini.inCart;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showCart());
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            mb: 3,
            position: 'static',
            height: 50,
          }}
        >
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Super Cool Store
            </Typography>
            <p id='cart'>CART ({showing.length})</p>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Header;
