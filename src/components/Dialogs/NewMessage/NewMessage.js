import React from 'react';
import classes from './NewMessage.module.css';




const NewMessage = () => {

  const newDialogMessage = React.createRef();


  const addMessage = () => {
    const messageText = newDialogMessage.current.value;
    alert(messageText);
  }


  return (
    <div>
      <textarea ref={ newDialogMessage }></textarea>
      <button onClick={ addMessage }>sent message</button>
    </div>
  )
}

export default NewMessage;

