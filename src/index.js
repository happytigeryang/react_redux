import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk' 

import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers';
import { fetchAllPosts } from './actions/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

store.dispatch(fetchAllPosts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
