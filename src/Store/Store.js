import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { getUser1 } from './MiddleWares/crud'
// import cityReducer from './Reducers/City';
 import UserReducer from './Reducers/UserReducer';
import Login from '../Components/login';
import ContactUs from '../Components/ContactUs';
 import { toUpperCaseFirstLetter } from './middleWares/crud'
const reducer = combineReducers({  UserReducer });
const store = createStore(reducer,applyMiddleware(toUpperCaseFirstLetter));
window.store = store;
export default store;