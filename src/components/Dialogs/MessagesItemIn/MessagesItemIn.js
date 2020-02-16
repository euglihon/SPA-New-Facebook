import React from 'react';
import classes from './MessagesItemIn.module.css';

const MessagesItemIn = (props) => {

  return (
    <div>
      <div className={classes.blockIn}>
        {props.messageText}
      </div>
    </div>
  )
}

export default MessagesItemIn;
