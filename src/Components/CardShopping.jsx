import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountCounter: 1,
    };
  }

  pricePlus = (event) => {
    console.log(event.target);
    const plusCenter = 1;
    this.setState((prevState) => ({
      amountCounter: prevState.amountCounter + plusCenter,
    }));
  }

  minusPlus = () => {
    const plusCenter = 1;
    const { amountCounter } = this.state;
    if (amountCounter > 0) {
      this.setState((prevState) => ({
        amountCounter: prevState.amountCounter - plusCenter,
      }));
    }
  }

  render() {
    const { amountCounter } = this.state;
    const { productCarrinho } = this.props;
    const plus = '+';
    const minus = '-';

    return (
      <div>
        <p
          data-testid="shopping-cart-product-name"
        >
          { productCarrinho.title }
        </p>
        <img src={ productCarrinho.thumbnail } alt={ productCarrinho.title } />
        <p>{ productCarrinho.price }</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.pricePlus }
          value={ productCarrinho.id }
        >
          { plus }
        </button>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          { amountCounter }
        </p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.minusPlus }
          value={ productCarrinho.id }
        >
          { minus }
        </button>
      </div>
    );
  }
}

CardShopping.propTypes = {
  productCarrinho: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,

  }).isRequired,
};

export default CardShopping;
