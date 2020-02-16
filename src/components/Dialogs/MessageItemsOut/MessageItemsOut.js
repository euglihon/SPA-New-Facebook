import React from 'react';
import classes from './MessageItemsOut.module.css';

const MessagesItemOut = (props) => {

  return (
    <div>
      <div className={classes.blockOut}>
        {props.messageText}
      </div>
    </div>
  )
}

export default MessagesItemOut;
