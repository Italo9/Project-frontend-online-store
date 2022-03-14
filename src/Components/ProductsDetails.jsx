import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import ProductCard from './ProductCard';

import { getProductDetails } from '../services/api';

class ProductsDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      thumbnail: '',
      price: '',
      specifications: [],
    };
  }

  componentDidMount() {
    this.fetchSpecifications();
  }

  fetchSpecifications = async () => {

    // const id = this.props.match.params.productId;
    const { match } = this.props;
    const id = match.params.productId;
    const productDetails = await getProductDetails(id);
    console.log(productDetails);
    this.setState({
      title: productDetails.title,
      thumbnail: productDetails.thumbnail,
      price: productDetails.price,
      specifications: productDetails.attributes,
    });

    // console.log(teste1);
  }

  render() {
    const { title, thumbnail, price, specifications } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/shoopingCart">
          <button type="button">
            CC
          </button>
        </Link>
        <div>
          <img alt={ title } src={ thumbnail } />
          <p data-testid="product-detail-name">{ title }</p>
          <p>{ price }</p>
          <ul>
            {/* {/* { specifications } } */}
            {/* {specifications.map((spec) => ( spec.results.atribute   )} */}
          </ul>
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
          </table>
        </div>
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  // query: PropTypes.string.isRequired,
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
