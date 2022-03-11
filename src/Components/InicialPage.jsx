import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import ProductCard from './ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class InicialPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productArr: [],
      seachInput: '',
      id: '',
      // listProductFilter: [],
      // words: '',
      // Search: '',
    };
  }

  // addText = ({ target }) => {
  //   console.log(target.value);
  //   this.setState({
  //     seachInput: target.value,
  //   });
  // }

  // addClickButton = () => {
  //   this.setState((index) => ({
  //     Search: index.words,
  //   }));
  //   const { words } = this.state;
  //   getProductsFromCategoryAndQuery(words).then((index) => {
  //     this.setState({
  //       words: '',
  //     });
  //     this.setState({
  //       productArr: index,
  //     });
  //   });
  // }

  // handleSearch = ({ target: { value } }) => {
  //   console.log({ target: { value } });
  //   const { productArr } = this.state;
  //   this.setState({ searchInput: value }, () => (
  //     productArr.filter((searchInput) => {
  //     })
  //   ));
  // }

  // filterProducts = (product) => {
  //   this.setState({
  //     productArr: productArr.filter((item) => item !== product),
  //   });
  // }
  componentDidMount() {
    this.fetchGetProdutcs();
  }

  // handleSearch = () => {
  //   const { seachInput, productArr } = this.state;
  //   const productFilter = productArr
  //     .filter((element) => element.title.includes(seachInput));
  //   console.log(productFilter);
  //   this.setState({
  //     listProductFilter: productFilter,
  //   });
  // }

  addText = ({ target }) => {
    console.log(target.value);
    this.setState({
      seachInput: target.value,
    });
  }

  fetchGetProdutcs = async () => {
    const { id, seachInput } = this.state;
    const requestProduct = await getProductsFromCategoryAndQuery(id, seachInput);
    console.log(requestProduct.results);
    this.setState({
      productArr: requestProduct.results,
    });
  }

  // Testando commit
  render() {
    const { seachInput, productArr } = this.state;
    return (
      <div data-testid="home-initial-message">
        <fieldset>
          <input
            type="text"
            name="name"
            value={ seachInput }
            onChange={ this.addText }
            data-testid="query-input"
          />
          <button
            type="button"
            onClick={ () => this.fetchGetProdutcs() }
            data-testid="query-button"
          >
            Search
          </button>
        </fieldset>
        <Link data-testid="shopping-cart-button" to="/shoopingCart">
          <button type="button">
            CA
          </button>
        </Link>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <Categories />
        <section>
          <ProductCard productArr={ productArr } />
        </section>
      </div>

    );
  }
}
export default InicialPage;
