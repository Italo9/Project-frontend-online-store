import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import ProductCard from './ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { testeMaroto } from '../services/api';

class ProductsDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      thumbnail: '',
      price: '',
      specifications: [],
      teste: '',
    };
  }

  componentDidMount() {
    this.fetchSpecifications();
  }

  fetchSpecifications = async () => {
    const { match } = this.props;
    // const { query } = this.props;
    const { teste } = this.state;
    console.log(this);
    console.log(match.params.productId);
    const ids = match.params.productId;
    // console.log(query);
    // const { match: { params: { id } } } = this.props;
    console.log(ids);
    const teste2 = await testeMaroto(ids);
    console.log(teste2);
    // const teste1 = testeMaroto(ids).then((retorno) => (
    //   // console.log(query);
    //   // console.log(productObj);
    //   this.setState({
    //     title: retorno.title,
    //     thumbnail: retorno.thumbnail,
    //     price: retorno.price,
    //     specifications: retorno.attributes,
    //   })
    // ));
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
          <p>{ title }</p>
          <p>{ price }</p>
          <ul>
            { specifications }
            {/* {specifications.map((spec) => ( spec.results.atribute   )} */}
          </ul>
        </div>
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  query: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }) };
ProductsDetails.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }) };

export default ProductsDetails;
