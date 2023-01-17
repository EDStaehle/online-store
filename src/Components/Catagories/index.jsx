import { connect } from 'react-redux';
import { changeDisplay } from '../../store/catagories';
import Button from '@mui/material/Button';
import * as React from 'react';

const Catagories = (props) => {
  const { categories, changeDisplay } = props;
  console.log(categories);
  return (
    <>
      {categories.map((categories, index) => (
        <article key={`categories-${index}`}>
          <Button onClick={() => changeDisplay(categories.name)}>
            {categories.displayName}
          </Button>
        </article>
      ))}
    </>
  );
};

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
  };
};
const mapDispatchToProps = {
  changeDisplay,
};
export default connect(mapStateToProps, mapDispatchToProps)(Catagories);
