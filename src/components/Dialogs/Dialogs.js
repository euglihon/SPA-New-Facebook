import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessagesItem from './MessagesItem/MessagesItem';

const Dialogs = () => {

  const dialogData = [
    {id: 1, name: 'Zeka'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Kolek'}
  ];

  const messageData = [
    {id: 1, messageText: 'Hello'},
    {id: 2, messageText: 'It\'s my first message'},
    {id:3, messageText: 'lol'}
  ];

  let dialogItems = dialogData.map( (dialogElement) => {
    return (
      <DialogItem id={dialogElement.id} name={dialogElement.name} />
    )
  });

  let messageItems = messageData.map(  (messageElement) => {
    return (
      <MessagesItem messageText={messageElement.messageText} />
    )
  });

  return (
    <div className={classes.dialogs}>

      <div className={classes.dialogsItems}>
        { dialogItems }
      </div>

      <div className={classes.messagesItems}>
        { messageItems }
      </div>

    </div>
  )
}

export default Dialogs;
