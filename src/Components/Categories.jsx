import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getCategories } from '../services/api';
// import InicialPage from './InicialPage';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      // categArr: [],
    };
  }

  // componentDidMount() {
  //   this.fetchCategories();
  // }

  // fetchCategories = async () => {
  //   const productsObj = await getCategories();
  //   this.setState({
  //     categArr: productsObj,
  //   });
  //   console.log(productsObj);
  // }

  render() {
    // const { categArr } = this.state;
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
