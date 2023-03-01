import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import myFirstReducer from './reducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ myFirstReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <React.StrictMode>
    <provider store={store}>
      <App/>
    </provider>
  </React.StrictMode>,
);