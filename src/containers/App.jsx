import  React, {useEffect} from 'react';
import Header from '../components/Header';
import {getLoginStatus} from './store/actions';
import { renderRoutes } from "react-router-config";


const App = ({route}) => {
    return <div>
        <Header></Header>
        <div>
            {renderRoutes(route.routes)}
        </div>
    </div>
}

App.loadData = (store) => {
    return store.dispatch(getLoginStatus())
}

export default App;