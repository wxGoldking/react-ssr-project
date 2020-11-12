import React from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Helmet} from "react-helmet";

const Personal = () => {
    const isLogin = useSelector(({root}) => root.isLogin);
    return isLogin ? <div>
        <Helmet>
            <title>个人页</title>
            <meta name="description" content="个人页" />
        </Helmet>
        Personal Page;
    </div> : <Redirect to="/"/>
}

export default Personal;