import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootStore = {
    name: '渐几于道'
}

const rootReduce = (state = rootStore, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
const reducer = combineReducers({
    root: rootReduce
})

export default () => createStore(reducer, applyMiddleware(logger, thunk));