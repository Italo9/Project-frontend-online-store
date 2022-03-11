import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import ProductCard from './ProductCard';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';

class InicialPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productArr: [],
      seachInput: '',
      categArr: [],
      // id: '',
      // listProductFilter: [],
      // words: '',
      // Search: '',
    };
  }

  componentDidMount() {
    this.fetchCategories();
    // this.fetchGetProdutcs();
  }

  fetchCategories = async () => {
    const productsObj = await getCategories();
    this.setState({
      categArr: productsObj,
    });
    console.log(productsObj);
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
  // componentDidMount() {
  //   this.fetchGetProdutcs();
  // }

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
    const {
      seachInput,
      categArr: category,
    } = this.state;
    if (seachInput.length > 0) {
      const request = await getProductsFromCategoryAndQuery(category.id, seachInput);
      console.log(request);
      this.setState({
        productArr: request.results,
      });
    } else {
      const request = await getProductsFromCategoryAndQuery(category.id, category.name);
      console.log(request);
      this.setState({
        productArr: request.results,
      });
    }
  }

  // Testando commit
  render() {
    const { seachInput, productArr, categArr } = this.state;
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
        <Categories
          // fetchCategories={ this.fetchCategories }
          fetchGetProdutcs={ this.fetchGetProdutcs }
          categArr={ categArr }
        />
        <section>
          <ProductCard productArr={ productArr } />
        </section>
      </div>

    );
  }
}
export default InicialPage;
