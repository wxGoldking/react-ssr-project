import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import StyleContext from 'isomorphic-style-loader/StyleContext'
import routes from '../Router';
import {Provider} from 'react-redux';
import {getClientStore} from '../containers/store';

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss());
  return () => removeCss.forEach(dispose => dispose());
};

const App = () => {
  return <StyleContext.Provider value={{ insertCss }}>
    <Provider store={getClientStore()}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  </StyleContext.Provider>
}

ReactDom.hydrate(<App />, document.getElementById('root'))