import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import routes from '../Router';
import {Provider} from 'react-redux';
import {getClientStore} from '../containers/store';


const App = () => {
  return <Provider store={getClientStore()}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
}

ReactDom.hydrate(<App />, document.getElementById('root'))