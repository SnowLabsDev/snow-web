import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, Switch } from 'react-router-dom';
require("babel-core/register");
require("babel-polyfill");
import reducers from './reducers';
import history from './history';

import SignIn from './screens/SignIn';
import App from './screens/App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/users/id/:id/" component={App} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
