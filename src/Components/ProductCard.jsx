import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      productShopingCart: [],
    };
  }

  // componentDidMount() {
  //   this.fetchGetProdutcs();
  // }

  // fetchGetProdutcs = async () => {
  //   const requestProduct = await getProductsFromCategoryAndQuery();
  //   this.setState({
  //     productArr: requestProduct,
  //   });
  // }

  handleClickAddShopingCard = (objProduct) => {
    const { productShopingCart } = this.state;
    this.setState((prevState) => ({
      productShopingCart: [...prevState.productShopingCart, objProduct],
    }));
    // productShopingCart.push(objProduct);
    console.log(productShopingCart);
  }

  render() {
    // const { title, thumbnail, price } = this.props;
    const { productArr } = this.props;
    console.log(productArr);
    return (
      <div>
        {(productArr.length !== 0) ? (
          productArr.map((product) => (
            <section key={ product.id } data-testid="product">
              <Link
                to={ `/productsDetails/${product.id}` }
                data-testid="product-detail-link"
              >
                <p>{product.title}</p>
              </Link>

              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.price}</p>
              <button
                data-testid="product-add-to-cart"
                type="button"
                onClick={ () => this.handleClickAddShopingCard(product) }
              >
                Adicionar ao Carrinho
              </button>
            </section>
          ))
        ) : ('Nenhum produto foi encontrado')}
      </div>

    );
  }
}

ProductCard.propTypes = {
  productArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
