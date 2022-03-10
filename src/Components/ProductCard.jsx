import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductCard extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     productArr: [],
  //   };
  // }

  // componentDidMount() {
  //   this.fetchGetProdutcs();
  // }

  // fetchGetProdutcs = async () => {
  //   const requestProduct = await getProductsFromCategoryAndQuery();
  //   this.setState({
  //     productArr: requestProduct,
  //   });
  // }

  render() {
    // const { title, thumbnail, price } = this.props;
    const { listProductFilter } = this.props;
    return (
      <div>
        {(!listProductFilter.length === 0) ? (
          listProductFilter.map((product) => (
            <section key={ product.id }>
              <p>{product.title}</p>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.price}</p>
            </section>
          ))
        ) : ('Nenhum produto foi encontrado')}
      </div>

    );
  }
}

ProductCard.propTypes = {
  listProductFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
