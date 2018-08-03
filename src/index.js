import React from "react";
import ReactDOM from "react-dom";

import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'

//redux
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";

//router
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";

//css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import About from "./components/About";
import rootReducer from "./reducers";
import { fetchAllPosts } from "./actions/index";
import { Button } from 'antd';

import registerServiceWorker from "./registerServiceWorker";

const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  applyMiddleware(routeMiddleware, ReduxThunk,promiseMiddleware(),logger)
);

store.dispatch(fetchAllPosts());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/Home" component={App} />
        <Route exact path="/about" component={About} />
        <Button type="primary">Button</Button>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
