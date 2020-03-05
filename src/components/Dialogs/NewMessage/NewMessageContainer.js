import React from 'react';
import classes from './NewMessage.module.css';
import NewMessage from './NewMessage';

import { addMessageActionCreator, updateMessageValueActionCreator } from '../../../redux/dialogsReducer';


const NewMessageContainer = (props) => {

  const addMessageItem = () => {
    props.dispatch(addMessageActionCreator());
    props.dispatch(updateMessageValueActionCreator(''));
  }

  const onMessageChange = (text) => {
    props.dispatch( updateMessageValueActionCreator(text) );
  }

  return (
    <NewMessage updateMessageText={onMessageChange}
      addMessageItem={addMessageItem}

      newMessageText={props.messageTextareaValue}
    />
  )
}

export default NewMessageContainer;
