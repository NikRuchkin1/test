import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profile-reducer'
import navReducer from './nav-reducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    mainPage: profileReducer,
    nav: navReducer,
})

let  store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store;