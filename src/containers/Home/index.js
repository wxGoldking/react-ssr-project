import React from 'react';
import Header from '../../components/Header';

export default () => {
  return <div>
    <Header></Header>
    <h1>Home Page !!!</h1>
    <button onClick={() => console.log('click button')}>click</button>
  </div> 
}