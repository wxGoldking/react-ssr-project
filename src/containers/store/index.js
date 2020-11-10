import {createStore, applyMiddleware, combineReducers} from 'redux';
import { SET_LOGIN, LOGIN_OUT } from "./constanst";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducer as HomeReducer} from '../Home/store';
import {clientHttp, serverHttp} from '../api';

const rootStore = {
    name: '渐几于道',
    isLogin: false
}

const rootReducer = (state = rootStore, action) => {
    switch (action.type) {
        case SET_LOGIN: 
            return {
                ...rootStore,
                isLogin: action.data
            };
        case LOGIN_OUT: 
            return {
                ...rootStore,
                isLogin: false
            };
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
export const getServerStore = (ctx) => createStore(reducer, applyMiddleware(logger, thunk.withExtraArgument(serverHttp(ctx))));

// 客户端store
export const getClientStore = () => {
    const initState = window._content.state;
    return createStore(reducer, initState, applyMiddleware(logger, thunk.withExtraArgument(clientHttp)));
}