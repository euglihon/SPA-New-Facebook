const initialState = {
  posts: [
    {id: 1, messageText: 'Hello New-Facebook', likesCount: 10},
    {id: 2, messageText: 'Hello React', likesCount: 5}
  ],

  textareaValue: ''
};


const profileReducer = (state = initialState, action) => {

  if (action.type === 'ADD-POST') {
    const copyState = {...state};    //глубокие копии
    copyState.posts = [...state.posts];  //глубокие копии

    const newPost = { id: 3, messageText: copyState.textareaValue, likesCount:0 };
    copyState.posts.push(newPost);

    return copyState
  }

  else if (action.type === 'ADD-TEXTAREA-VALUE') {
    const copyState = {...state};   //глубокие копии

    copyState.textareaValue = action.newValue;

    return copyState;
  }

  return state;
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

export default profileReducer;
