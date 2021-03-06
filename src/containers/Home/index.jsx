import React, {useEffect} from 'react';
import {getNewsList} from './store/actions';
import {useSelector, useDispatch} from 'react-redux';
import WithStyles from '../../components/WithStyles';
import {Helmet} from "react-helmet";
import styles from './index.css';

const Home = WithStyles(() => {
  const name = useSelector(({root}) => root.name);
  const list = useSelector(({home}) => home.list);
  const dispatch = useDispatch();
  useEffect(() => {
    if(!list.length) {
      dispatch(getNewsList());
    }
  }, [])
  return <div>
    <Helmet>
        <title>首页</title>
        <meta name="description" content="首页" />
    </Helmet>
    <h1 className={styles.title}>Home Page !!!</h1>
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
}, styles)

Home.loadData = (store) => {
  return store.dispatch(getNewsList());
}
export default Home;