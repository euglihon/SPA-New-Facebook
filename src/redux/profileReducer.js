const profileReducer = (state, action) => {

  if (action.type === 'ADD-POST') {
    const newPost = { id: 3, messageText: state.textareaValue, likesCount:0 }
    state.posts.push(newPost);
  }

  else if (action.type === 'ADD-TEXTAREA-VALUE') {
    state.textareaValue = action.newValue;
  }

  return state;
};

export default profileReducer;
