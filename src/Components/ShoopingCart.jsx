import React, { Component } from 'react';
import CardShopping from './CardShopping';

class ShoopingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterProduct: 1,
      carrinhoDeCompras: [],
      // plusPrice: 1,
    };
  }

  componentDidMount() {
    const recuperaProduct = JSON.parse(localStorage.getItem('carrinhoDeCompras')) || [];
    // console.log(typeof recuperaProduct);
    const totalProducts = recuperaProduct.length;
    // console.log(totalProducts);
    this.setState({
      counterProduct: totalProducts,
      carrinhoDeCompras: recuperaProduct,
    });
  }

  // addItem = () => {
  //   // const { carrinhoDeCompras } = this.state;
  //   // this.setState((prevState) => {
  //   //   [id]: prevState[id]+ 1
  //   // }, () => this.shoppingCartValue())

  //   const priceProduce
  //   this.setState({
  //     plusPrice : priceProduct,
  //   })
  // }
  //
  //  findProduct = (event) => {
  //    const { value, name } = event.target;
  //    const { produtoCarrinho } = this.state;
  //    produtoCarrinho.find((producId) => producId.id === value);
  //    if (name === 'plus') {
  //      (this.pricePlus());
  //    } else { this.minusPlus(); }
  //  }
  //

  // shoppingCartValue = () => {
  //   const { carrinhoDeCompras } = this.state;
  //   const sumProducts = carrinhoDeCompras.reduce((acc, product) => {
  //     console.log(product.id);
  //     const sumPrices = product.id * product.price;
  //     return (acc + sumPrices);
  //   }, 0);
  //   this.setState({
  //     total: sumProducts,
  //   });
  // }

  render() {
    const { carrinhoDeCompras, counterProduct } = this.state;
    return (
      <div>
        { (counterProduct !== 0)
          ? (
            <div>
              <button
                type="button"
              >
                { `${counterProduct} CA`}
              </button>
              { carrinhoDeCompras.map((productCarrinho) => (
                <CardShopping
                  key={ productCarrinho.title }
                  productCarrinho={ productCarrinho }
                />
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

export default ShoopingCart;
