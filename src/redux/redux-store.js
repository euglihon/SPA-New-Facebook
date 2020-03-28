import {createStore, combineReducers, applyMiddleware} from 'redux';
import dialogReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';


const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  usersPage: usersReducer,
  sideBar: sideBarReducer,
  auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware)); // applyMiddleware --> для корректной работы THUNK. Функция из Редакс для создания Санк Мидл Веира   (!!!!!!!!!npm i redux-thunk!!!!!!!!)

window.store = store;

export default store;
