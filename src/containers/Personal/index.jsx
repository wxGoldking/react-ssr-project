import React from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Personal = () => {
    const isLogin = useSelector(({root}) => root.isLogin);
    return isLogin ? <div>
        Personal Page;
    </div> : <Redirect to="/"/>
}

export default Personal;