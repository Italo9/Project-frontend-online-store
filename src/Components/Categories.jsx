import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const { fetchGetProdutcs, categArr } = this.props;
    return (
      <nav>
        {categArr.map((category) => (
          <label data-testid="htmlFor" htmlFor={ category.id } key={ category.id }>
            <input
              data-testid="category"
              type="radio"
              id={ category.id }
              name="hahaha"
              value={ category.id }
              onClick={ () => (fetchGetProdutcs(category.id, category.name)) }
            />
            { category.name }
          </label>
        ))}
      </nav>

    );
  }
}

Categories.propTypes = {
  fetchGetProdutcs: PropTypes.func.isRequired,
  categArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Categories;
