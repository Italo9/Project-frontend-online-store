import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InicialPage from './Components/InicialPage';
import ShoopingCart from './Components/ShoopingCart';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <InicialPage />
            </Route>

            <Route exact path="/shoopingCart">
              <ShoopingCart />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
