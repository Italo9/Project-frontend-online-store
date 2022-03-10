import React from 'react';

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
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    );
  }
}
export default InicialPage;
