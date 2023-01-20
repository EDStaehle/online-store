import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from '@mui/material/';
import { addToCart } from '../../store/cartMini';
import { getProducts } from '../../store/products';

const Products = (props) => {
  const { products, activeCat } = useSelector((state) => state);

  const dispatch = useDispatch();
  const activeProducts = products.filter(
    (item) => item.category === activeCat.activeCategory,
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {activeProducts !== []
        ? activeProducts?.map((product, index) => (
            <article key={`product-${index}`}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image='/static/images/cards/contemplative-reptile.jpg'
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='div'>
                        {product.name}
                      </Typography>
                    </CardContent>
                    <Typography variant='body2' color='text.secondary'>
                      Price: ${product.price}
                    </Typography>
                    <CardActions>
                      <Button
                        size='small'
                        onClick={() => dispatch(addToCart(product))}
                      >
                        Add To Cart
                      </Button>
                      <Button size='small'>View Details</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </article>
          ))
        : null}
    </>
  );
};

export default Products;
