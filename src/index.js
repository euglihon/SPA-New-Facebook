import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state';


const renderTree = () => {
  ReactDOM.render(<App state={store.getState()} addPost={store.addPost.bind(store)} addTextareaValue={store.addTextareaValue.bind(store)}/>, document.getElementById('root'));
}

renderTree(store.getState());
store.subscribe(renderTree);
