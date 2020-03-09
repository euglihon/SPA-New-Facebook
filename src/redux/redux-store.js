import {createStore, combineReducers} from 'redux';
import dialogReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from './usersReducer';


const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  usersPage: usersReducer,
  sideBar: sideBarReducer
});



const store = createStore(reducers);


window.store = store;



export default store;
