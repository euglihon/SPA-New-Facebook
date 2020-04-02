import { ProfileAPI } from '../api/api';

const initialState = {
  posts: [
    {id: 1, messageText: 'Hello New-Facebook', likesCount: 10},
    {id: 2, messageText: 'Hello React', likesCount: 5}
  ],
  textareaValue: '',
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch(action.type) {

    case 'ADD-POST':
      return {
        ...state,
        posts: [...state.posts, {id: 3, messageText: state.textareaValue, likesCount: 0 }]
      }

      case 'ADD-TEXTAREA-VALUE':
        return {
          ...state,
          textareaValue: action.newValue
        }

      case 'SET-USER-PROFILE':
        return {
          ...state,
          profile: action.profile
        }

      case 'SET-STATUS':
        return {
          ...state,
          status: action.status
        }

      default:
        return state;
  }
};


export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
};

export const updateNewValueActionCreator = (text) => {
  return {
    type: 'ADD-TEXTAREA-VALUE',
    newValue: text
  }
};

const setUserProfile = (profile) => {
  return {
    type: 'SET-USER-PROFILE',
    profile: profile
  }
};

const setStatus = (status) => {
  return {
    type: 'SET-STATUS',
    status: status
  }
}



export const getProfileDataThunk = (userId) => {
  return (dispatch) => {
    ProfileAPI.getProfile(userId)
    .then( (data) => {
        dispatch(setUserProfile(data))
    })
  }
}

export const getProfileStatusThunk = (userId) => {
  return (dispatch) => {
    ProfileAPI.getStatus(userId)
    .then( (data) => {
      dispatch(setStatus(data))
    })
  }
}

export const updateProfileStatusThunk = (status) => {
  return (dispatch) => {
    ProfileAPI.updateStatus(status)
    .then( (response) => {
      debugger;
      if(response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
  }
}



export default profileReducer;
