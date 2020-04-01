import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessagesItems from './MessageItems/MessageItems';
import { Redirect } from 'react-router-dom';



const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map( (dialogElement) => <DialogItem id={dialogElement.id} name={dialogElement.name} />);

  let messageElements = props.dialogsPage.messages.map(  (messageElement) => <MessagesItems messageText={messageElement.messageText} />);



  const onAddMessage = () => {
    props.addMessageItem();
  }

  const onMessageChange = (event) => {
    props.updateMessageText(event.target.value)
  }

  return (
    <div className={classes.dialogs}>

      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>

      <div className={classes.messagesItems}>
        { messageElements }

        <div>
          <textarea
            onChange={ onMessageChange }
            value={ props.dialogsPage.messageTextareaValue }
          />
          <button onClick={ onAddMessage }>sent message</button>
        </div>
      </div>
    </div>
  )

}




export default Dialogs;
