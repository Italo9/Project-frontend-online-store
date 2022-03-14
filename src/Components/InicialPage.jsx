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
      productShopingCart: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
    this.setState({
      productShopingCart: JSON.parse(localStorage.getItem('carrinhoDeCompras')) || [],
    });
  }

  fetchCategories = async () => {
    const productsObj = await getCategories();
    this.setState({
      categArr: productsObj,
    });
    console.log(productsObj);
  }

  addText = ({ target }) => {
    console.log(target.value);
    this.setState({
      seachInput: target.value,
    });
  }

  fetchGetProdutcs = async (categoryId, categoryName) => {
    const {
      seachInput,
      categArr,
    } = this.state;
    console.log(categArr);
    if (seachInput.length > 0) {
      const request = await getProductsFromCategoryAndQuery(categArr.id, seachInput);
      console.log(request);
      this.setState({
        productArr: request.results,
      });
    } else {
      const request = await getProductsFromCategoryAndQuery(categoryId, categoryName);
      console.log(request);
      this.setState({
        productArr: request.results,
      });
    }
  }

  handleClickAddShopingCard = (objProduct) => {
    this.setState((prevState) => ({
      productShopingCart: [...prevState.productShopingCart, objProduct],
    }), () => {
      const { productShopingCart } = this.state;
      localStorage.setItem('carrinhoDeCompras', JSON.stringify(productShopingCart));
    });
    // productShopingCart.push(objProduct);
    // console.log(productShopingCart);
  }

  // Testando commit
  render() {
    const { seachInput, productArr, categArr } = this.state;
    return (
      <div data-testid="home-initial-message">
        <fieldset>
          <input
            type="text"
            data-testid="query-input"
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
            CC
          </button>
        </Link>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <Categories
          // fetchCategories={ this.fetchCategories }
          fetchGetProdutcs={ this.fetchGetProdutcs }
          categArr={ categArr }
        />
        <section>
          <ProductCard
            productArr={ productArr }
            handleClickAddShopingCard={ this.handleClickAddShopingCard }
          />
        </section>
      </div>

    );
  }
}
export default InicialPage;
