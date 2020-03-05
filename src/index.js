import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';


const renderTree = () => {
  ReactDOM.render(<App state={store.getState()}
    dispatch={store.dispatch.bind(store)}
    />,
      document.getElementById('root'));
}

renderTree(store.getState());

store.subscribe( () => {
  const state = store.getState();
  renderTree(state);
} );
