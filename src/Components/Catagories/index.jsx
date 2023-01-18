import { connect } from 'react-redux';
import * as React from 'react';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { changeDisplay } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Categories = (props) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state);

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
                    onClick={() => dispatch(changeDisplay(category.name))}
                  >
                    {category.displayName}
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
