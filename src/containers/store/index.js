import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducer as HomeReducer} from '../Home/store'

const rootStore = {
    name: '渐几于道'
}

const rootReducer = (state = rootStore, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
const reducer = combineReducers({
    root: rootReducer,
    home: HomeReducer
})

// 服务端store
// 服务器端的 Store 是所有用户都要用的，每个用户访问的时候，这个函数重新执行，为每个用户提供一个独立的 Store, 而不是提前创建好的一个单例：
export const getServerStore = () => createStore(reducer, applyMiddleware(thunk));

// 客户端store
export const getClientStore = () => {
    const initState = window._content.state;
    return createStore(reducer, initState, applyMiddleware(logger, thunk));
}