import React from 'react';
import classes from './NewMessage.module.css';

import { addMessageActionCreator, updateMessageValueActionCreator } from '../../../redux/state';


const NewMessage = (props) => {

 console.log(props)

  const newDialogMessage = React.createRef();


  const addMessageItem = () => {
    props.dispatch( addMessageActionCreator() );
    props.dispatch( updateMessageValueActionCreator('') );
  }

  const updateMessageValue = () => {
    const text = newDialogMessage.current.value;
    props.dispatch( updateMessageValueActionCreator(text) );
  }




  return (
    <div>
      <textarea ref={ newDialogMessage }
        onChange={ updateMessageValue }
        value={ props.messageTextareaValue }
      />
      <button onClick={ addMessageItem }>sent message</button>
    </div>
  )
}

export default NewMessage;

