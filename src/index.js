import React from 'react';
import ReactDOM from 'react-dom';

import state from './redux/state';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const postsData = [
  {id: 1, messageText: 'Hello New-Facebook', likesCount: 10},
  {id: 2, messageText: 'Hello React', likesCount: 5},
];

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

ReactDOM.render(<App state={state}/>, document.getElementById('root'));

serviceWorker.unregister();
