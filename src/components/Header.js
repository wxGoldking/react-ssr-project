import React from 'react';
import {Button} from 'antd';
import {logOut} from '../containers/store/actions';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

export default () => {
  // const name = useSelector(({root}) => root.name);
  const dispatch = useDispatch();
  const isLogin = useSelector(({root}) => root.isLogin);
  const loginOutHandle = () => {
    dispatch(logOut());
  }
  return <div>
    {/* <h5>{name}</h5> */}
    <Link to="/">Home</Link>&nbsp;
    {
      !isLogin 
      ? <Link to="/login">登录</Link>
      : <Button type="link" onClick={loginOutHandle}>退出</Button>
    }
  </div> 
}