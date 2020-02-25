import React from 'react';
import ReactDOM from 'react-dom';
import state from './redux/state';
import App from './App';
import {addPost, addTextareaValue, subscribe} from './redux/state';


const renderTree = () => {
  ReactDOM.render(<App state={state} addPost={addPost} addTextareaValue={addTextareaValue}/>, document.getElementById('root'));
}

renderTree(state);
subscribe(renderTree);
