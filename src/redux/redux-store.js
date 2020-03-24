import {createStore, combineReducers} from 'redux';
import dialogReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  usersPage: usersReducer,
  sideBar: sideBarReducer,
  auth: authReducer
});

const store = createStore(reducers);

window.store = store;

export default store;
