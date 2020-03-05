const initialState = {
  dialogs: [
    {id: 1, name: 'Zeka'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Kolek'}
  ],

  messagesIn: [
    {id: 1, messageText: 'Hello'},
    {id: 2, messageText: 'It\'s my first message'},
    {id: 3, messageText: 'lol'}
  ],

  messagesOut: [
    {id: 1, messageText: 'Hello React'},
    {id: 2, messageText: 'Ok'},
    {id: 3, messageText: 'Bye Bye'}
  ],

  messageTextareaValue: ''
};





const dialogReducer = (state = initialState, action) => {
  if (action.type === 'ADD-MESSAGE') {
    const newMessage = {id: 3, messageText: state.messageTextareaValue};
    state.messagesOut.push(newMessage);
  }

  else if (action.type === 'ADD-MESSAGE-VALUE') {
    state.messageTextareaValue = action.newValue;
  }

  return state;
};




export const addMessageActionCreator = () => {
  return {
    type: 'ADD-MESSAGE'
  }
};

export const updateMessageValueActionCreator = (text) => {
  return {
    type: 'ADD-MESSAGE-VALUE',
    newValue: text
  }
}

export default dialogReducer;
