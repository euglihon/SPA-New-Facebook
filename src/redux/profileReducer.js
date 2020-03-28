const initialState = {
  posts: [
    {id: 1, messageText: 'Hello New-Facebook', likesCount: 10},
    {id: 2, messageText: 'Hello React', likesCount: 5}
  ],
  textareaValue: '',
  profile: null
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

      default:
        return state;
  }


  // if (action.type === 'ADD-POST') {
  //   const copyState = {...state};    //глубокие копии
  //   copyState.posts = [...state.posts];  //глубокие копии
  //   const newPost = { id: 3, messageText: copyState.textareaValue, likesCount:0 };
  //   copyState.posts.push(newPost);
  //   return copyState
  // }

  // else if (action.type === 'ADD-TEXTAREA-VALUE') {
  //   const copyState = {...state};   //глубокие копии
  //   copyState.textareaValue = action.newValue;
  //   return copyState;
  // }

  // else if (action.type === 'SET-USER-PROFILE') {
  //   const copyState = {...state};
  //   copyState.profile = action.profile;
  //   return copyState;
  // }
  // return state;
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

export const setUserProfile = (profile) => {
  return {
    type: 'SET-USER-PROFILE',
    profile: profile
  }
};

export default profileReducer;
