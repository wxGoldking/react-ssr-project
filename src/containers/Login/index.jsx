import React, {useState} from 'react';
import { Button, Input} from 'antd';
import {login} from '../store/actions';
import {useDispatch} from 'react-redux';
import WithStyles from '../../components/WithStyles';
import styles from './index.css';
const Login = WithStyles(() => {
  const [form, setForm] = useState({
    name: '',
    password: ''
  });
  const dispatch = useDispatch();
  const loginHandle = () => {
    dispatch(login(form));
  }
  const setData = (key) => (e) => {
    setForm({
      ...form,
      [key]: e.target.value
    })
  }
  return <div className={styles.form}>
    <h3 className={styles.title}>Login Page</h3>
    用户名：<Input type="text" value={form.name} onChange={setData('name')}/>
    <br/><br/>
    密码：<Input type="password" value={form.password} onChange={setData('password')}/>
    <br/>
    <br/>
    <Button type="primary" onClick={loginHandle}>提交</Button>
  </div> 
}, styles)
export default Login;