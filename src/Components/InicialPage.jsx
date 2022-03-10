import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

class InicialPage extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <fieldset>
          <input
            type="text"
            name="name"
          />
        </fieldset>
        <Link data-testid="shopping-cart-button" to="/shoopingCart">
          <button type="button">
            CA
          </button>
        </Link>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <Categories />

      </div>

    );
  }
}
export default InicialPage;
