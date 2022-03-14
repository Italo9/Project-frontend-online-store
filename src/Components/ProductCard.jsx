import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { productArr, handleClickAddShopingCard } = this.props;
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
                onClick={ () => handleClickAddShopingCard(product) }
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
  handleClickAddShopingCard: PropTypes.func.isRequired,
};

export default ProductCard;
