import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProductDetails } from '../services/api';

class ProductsDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      thumbnail: '',
      price: '',
      specifications: [],
      counterProduct: JSON.parse(localStorage.getItem('carrinhoDeCompras')) || [],
      productShopingCart: [],
      objProduct: [],
    };
  }

  componentDidMount() {
    // const { counterProduct } = this.state;
    this.fetchSpecifications();
    const productStorage = JSON.parse(localStorage.getItem('carrinhoDeCompras')) || [];
    console.log(productStorage);
    this.setState({
      productShopingCart: JSON.parse(localStorage.getItem('carrinhoDeCompras')) || [],
      counterProduct: productStorage.length,
    });
    // this.setState({
    //   productShopingCart: JSON.parse(localStorage.getItem('carrinhoDeCompras')) || [],
    // });
    // if (counterProduct.length !== 0) {
    //   this.setState({
    //     counterProduct: JSON.parse(localStorage.getItem('carrinhoDeCompras')).length,
    //   });
    // } else {
    //   this.setState({
    //     counterProduct: 0,
    //   });
    // }
    // this.handleClickAddShopingCard();
  }

  fetchSpecifications = async () => {
    const { match } = this.props;
    const id = match.params.productId;
    const productDetails = await getProductDetails(id);
    console.log(productDetails);
    this.setState({
      title: productDetails.title,
      thumbnail: productDetails.thumbnail,
      price: productDetails.price,
      specifications: productDetails.attributes,
      objProduct: productDetails,
    });
  }

  handleClickAddShopingCard = (objProduct) => {
    this.setState((prevState) => ({
      productShopingCart: [...prevState.productShopingCart, objProduct],
      counterProduct: prevState.counterProduct + 1,
    }), () => {
      const { productShopingCart } = this.state;
      localStorage.setItem('carrinhoDeCompras', JSON.stringify(productShopingCart));
    });
  }

  render() {
    const {
      title,
      thumbnail,
      price,
      specifications,
      objProduct,
      counterProduct } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/shoopingCart">
          <button type="button">
            {`CC ${counterProduct}`}
          </button>
        </Link>
        <div>
          <img alt={ title } src={ thumbnail } />
          <p data-testid="product-detail-name">{ title }</p>
          <p>{ price }</p>
          <h3>Características</h3>
          <table>
            <tbody>
              {specifications.map((spec) => (
                <tr key={ spec.name }>
                  <td>{spec.name}</td>
                  <td>{spec.value_name}</td>
                </tr>
              ))}
            </tbody>
            <button
              type="button"
              onClick={ () => this.handleClickAddShopingCard(objProduct) }
              data-testid="product-detail-add-to-cart"
            >
              Add
            </button>
          </table>
        </div>
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.number.isRequired,
    }),
  }) };
ProductsDetails.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.number.isRequired,
    }),
  }) };

export default ProductsDetails;
