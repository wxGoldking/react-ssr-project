import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Router from '../Router';
import {Provider} from 'react-redux';
import getStore from '../containers/store'

const App = () => {
  return <Provider store={getStore()}>
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  </Provider>
}

ReactDom.hydrate(<App />, document.getElementById('root'))