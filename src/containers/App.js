import  React from 'react';
import Header from '../components/Header';
import { renderRoutes } from "react-router-config";
// import "antd/dist/antd.css";


const App = ({route}) => {
    return <div>
        <Header></Header>
        <div>
            {renderRoutes(route.routes)}
        </div>
    </div>
}

export default App;