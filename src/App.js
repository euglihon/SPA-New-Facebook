import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs';

import { Route, BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>

        <Header />
        <NavBar friends={props.state.friends}/>

        <div className='app-wrapper-content'>

          <Route path='/profile'
            render={ () => <Profile
              localState={ props.state.profilePage }
              dispatch={props.dispatch}
              /> }
          />

          <Route path='/messages'
            render={ () => <Dialogs localState={ props.state.dialogsPage } /> }
          />

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
