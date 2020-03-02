const dialogReducer = (state, action) => {
  if (action.type === 'ADD-MESSAGE') {
    const newMessage = {id: 3, messageText: state.messageTextareaValue};
    state.messagesOut.push(newMessage);
  }

  else if (action.type === 'ADD-MESSAGE-VALUE') {
    state.messageTextareaValue = action.newValue;
  }

  return state;
};

export default dialogReducer;
