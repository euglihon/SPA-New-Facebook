const initialState = {
  dialogs: [
    {id: 1, name: 'Zeka'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Kolek'}
  ],

  messages: [
    {id: 1, messageText: 'Hello React'},
    {id: 2, messageText: 'Ok'},
    {id: 3, messageText: 'Bye Bye'}
  ],

  messageTextareaValue: ''
};





const dialogReducer = (state = initialState, action) => {
  if (action.type === 'ADD-MESSAGE') {
    const copyState = {...state};
    copyState.messages = [...state.messages];

    const newMessage = {id: 3, messageText: copyState.messageTextareaValue};
    copyState.messages.push(newMessage);

    return copyState;
  }

  else if (action.type === 'ADD-MESSAGE-VALUE') {
    const copyState = {...state};

    copyState.messageTextareaValue = action.newValue;

    return copyState;
  }

  return state;
};





export const addMessageItem = () => {
  return {
    type: 'ADD-MESSAGE'
  }
};

export const updateMessageText = (text) => {
  return {
    type: 'ADD-MESSAGE-VALUE',
    newValue: text
  }
}

export default dialogReducer;
