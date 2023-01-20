import { useEffect } from 'react';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Button } from '@mui/material/';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/catagories';
import { updateActive } from '../../store/activeCat';

const Categories = (props) => {
  const dispatch = useDispatch();
  const { categories, activeCat, products } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(4),
  }));

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {categories.map((category, index) => (
            <article key={`category-${index}`}>
              <Grid item xs={4}>
                <Item>
                  <Button
                    onClick={() =>
                      dispatch(updateActive(category.name, products))
                    }
                  >
                    {category.name}
                  </Button>
                </Item>
              </Grid>
            </article>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Categories;
