import React from 'react';
import { ReactDOM } from 'react';
import App from "./App";
import {Provider} from 'react-redux';
import {legacy_createStore, applyMiddleware, compose} from 'redux';
import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));