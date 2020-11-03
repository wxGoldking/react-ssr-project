import React from 'react';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';

export default () => {
  const name = useSelector(({root}) => root.name)

  return <div>
    <Header></Header>
    <h1>Home Page !!!</h1>
    <h2>name: {name}</h2>
    <button onClick={() => console.log('click button')}>click</button>
  </div> 
}