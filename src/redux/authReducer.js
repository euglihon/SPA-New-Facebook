import { usersAPI } from '../api/api';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {

    case 'SET-USER-DATA':
      return {
        ...state,
        ...action.data,
        isAuth: true
      }

    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => {
  return {
    type: 'SET-USER-DATA',
    data: {id, email, login}
  };
};

export const getAuthThunk = () => {
  return (dispatch) => {
    usersAPI.getLoginInfo()
    .then( (data) => {
       if(data.resultCode === 0) {  //login --> true
         const {id, email, login} = data.data
         dispatch(setAuthUserData(id, email, login));
       }
    } )
  }
}

export default authReducer;
