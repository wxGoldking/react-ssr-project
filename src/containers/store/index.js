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

export default () => createStore(reducer, applyMiddleware(logger, thunk));