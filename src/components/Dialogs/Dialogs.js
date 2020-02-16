import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessagesItemIn from './MessagesItemIn/MessagesItemIn';
import MessagesItemOut from './MessageItemsOut/MessageItemsOut';

const Dialogs = (props) => {

  let dialogItems = props.localState.dialogs.map( (dialogElement) => {
    return (
      <DialogItem id={dialogElement.id} name={dialogElement.name} />
    )
  });

  let messageItemsIn = props.localState.messagesIn.map(  (messageElement) => {
    return (
      <MessagesItemIn messageText={messageElement.messageText} />
    )
  });

  let messageItemsOut = props.localState.messagesOut.map(  (messageElement) => {
    return (
      <MessagesItemOut messageText={messageElement.messageText} />
    )
  });

  return (
    <div className={classes.dialogs}>

      <div className={classes.dialogsItems}>
        { dialogItems }
      </div>

      <div className={classes.messagesItems}>
        { messageItemsIn }



        { messageItemsOut }
      </div>

    </div>
  )
}

export default Dialogs;
