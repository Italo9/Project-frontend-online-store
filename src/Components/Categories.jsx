import React, { Component } from 'react';
import { getCategories } from '../services/api';
// import InicialPage from './InicialPage';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categArr: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const productsObj = await getCategories();
    this.setState({
      categArr: productsObj,
    });
    // console.log(productsObj);
  }

  render() {
    const { categArr } = this.state;
    return (
      <nav>
        {categArr.map((category) => (
          <label data-testid="htmlFor" htmlFor="hahaha" key={ category.id }>
            { category.name }
            <input data-testid="category" type="radio" id="hahaha" />
          </label>
        ))}
      </nav>

    );
  }
}

export default Categories;