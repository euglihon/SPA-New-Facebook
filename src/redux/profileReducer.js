const initialState = {
  posts: [
    {id: 1, messageText: 'Hello New-Facebook', likesCount: 10},
    {id: 2, messageText: 'Hello React', likesCount: 5}
  ],

  textareaValue: ''
};




const profileReducer = (state = initialState, action) => {

  if (action.type === 'ADD-POST') {
    const newPost = { id: 3, messageText: state.textareaValue, likesCount:0 };
    state.posts.push(newPost);
  }

  else if (action.type === 'ADD-TEXTAREA-VALUE') {
    state.textareaValue = action.newValue;
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
