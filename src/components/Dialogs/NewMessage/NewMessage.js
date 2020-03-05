import React from 'react';
import classes from './NewMessage.module.css';


const NewMessage = (props) => {

  const onAddMessage = () => {
    props.addMessageItem();
  }

  const onMessageChange = (event) => {
    props.updateMessageText(event.target.value)
  }

  return (
    <div>
      <textarea
        onChange={ onMessageChange }
        value={ props.newMessageText }
      />
      <button onClick={ onAddMessage }>sent message</button>
    </div>
  )
}

export default NewMessage;

