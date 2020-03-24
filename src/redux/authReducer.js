const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET-USER-DATA':
      const copyState = {...state, ...action.data, isAuth: true};
      return copyState;
  }
  return state;
};

export const setAuthUserData = (id, email, login) => {
  return {
    type: 'SET-USER-DATA',
    data: {id, email, login}
  };
};

export default authReducer;
