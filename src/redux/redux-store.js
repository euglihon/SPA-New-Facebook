import {createStore, combineReducers} from 'redux';
import dialogReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer';


const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  sideBar: sideBarReducer
});



const store = createStore(reducers);


window.store = store;



export default store;
