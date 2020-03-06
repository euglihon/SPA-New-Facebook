import React from 'react';
import classes from './MessageItems.module.css';

const MessagesItem = (props) => {

  return (
    <div>
      <div className={classes.blockOut}>
        {props.messageText}
      </div>
    </div>
  )
}

export default MessagesItem;
