import React, { Component } from 'react';
// import ReactRouterPropTypes from 'react-router-prpo-types';

class ShoopingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterProduct: 0,
      carrinhoDeCompras: [],
    };
  }

  componentDidMount() {
    const recuperaProduct = JSON.parse(localStorage.getItem('carrinhoDeCompras')) || [];
    console.log(typeof recuperaProduct);
    const totalProducts = recuperaProduct.length;
    console.log(totalProducts);
    this.setState({
      counterProduct: totalProducts,
      carrinhoDeCompras: recuperaProduct,
    });
  }

  // clickHistory() {
  //   const { history } = this.props;
  //   history.push('/InicialPage');
  // }

  render() {
    const { carrinhoDeCompras, counterProduct } = this.state;
    console.log(carrinhoDeCompras);
    return (
      <div>
        { (counterProduct !== 0)
          ? (
            <div>
              <button
                type="button"
                data-testid="shopping-cart-product-quantity"
                // onClick={ this.clickHistory }
              >
                { `${counterProduct} CA`}
              </button>
              { carrinhoDeCompras.map((productCarrinho) => (
                <div key={ productCarrinho.title }>
                  <p
                    data-testid="shopping-cart-product-name"
                  >
                    { productCarrinho.title }
                  </p>
                  <img src={ productCarrinho.thumbnail } alt={ productCarrinho.title } />
                  <p>{ productCarrinho.price }</p>
                </div>
              ))}
            </div>
          )
          : (
            <div>
              <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
            </div>
          )}
      </div>

    );
  }
}

// Login.propTypes = {
//   history: ReactRouterPropTypes.history.isRequired,
// };

export default ShoopingCart;
