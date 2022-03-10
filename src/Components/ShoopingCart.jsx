import React, { Component } from 'react';

class ShoopingCart extends Component {
  render() {
    return (
      <div>
        <button type="button">CA</button>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}

export default ShoopingCart;
