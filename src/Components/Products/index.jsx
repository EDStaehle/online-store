import { connect } from 'react-redux';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/actions';
const Products = (props) => {
  const { products, active } = useSelector((state) => state);
  const dispatch = useDispatch();
  const activeUse = active.activeCategory;

  const display = products.products.filter(
    (product) => product.category === activeUse,
  );

  let header = activeUse.toString().toUpperCase();

  return (
    <>
      <h2>{header}</h2>
      {display.map((product, index) => (
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
                    onClick={() => dispatch(addItem(product))}
                  >
                    Add To Cart
                  </Button>
                  <Button size='small'>View Details</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </article>
      ))}
    </>
  );
};

const mapStateToProps = ({ products, active }) => {
  return {
    products: products.products,
    active: active.activeCategory,
  };
};

export default connect(mapStateToProps)(Products);
