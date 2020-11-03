import React, {useEffect} from 'react';
import Header from '../../components/Header';
import {getNewsList} from './store/actions';
import {useSelector, useDispatch} from 'react-redux';

export default () => {
  const name = useSelector(({root}) => root.name);
  const list = useSelector(({home}) => home.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsList());
  }, [])
  return <div>
    <Header></Header>
    <h1>Home Page !!!</h1>
    <h2>name: {name}</h2>
    <ul>
      {
        list.map(({title, content}) => <li key={title}>
            <h4>{title}</h4>
            <p>{content}</p>
          </li>)
      }
    </ul>
    <button onClick={() => console.log('click button')}>click</button>
  </div> 
}