import React from 'react';
import classes from './MessagesItem.module.css';

const MessagesItem = (props) => {
  return (
    <div>
      {props.messageText}
    </div>
  )
}

export default MessagesItem;
