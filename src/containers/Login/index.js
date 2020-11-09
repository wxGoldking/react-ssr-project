import React, {useState} from 'react';
import { Button } from 'antd';
import styles from './index.css';
import useStyles from 'isomorphic-style-loader/useStyles'
const Login = () => {
  useStyles(styles);
  return <div className={styles.form}>
    <h3>Login Page</h3>
    用户名：<input type="text"/>
    <br/>
    密码：<input type="password"/>
    <Button type="primary">提交</Button>
  </div> 
}

export default Login;