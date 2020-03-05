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
        <NavBar sideBar={ props.state.sideBar }/>

        <div className='app-wrapper-content'>

          <Route path='/profile'
            render={ () => <Profile
              state={ props.state.profilePage }
              dispatch={ props.dispatch }
              /> }
          />

          <Route path='/messages'
            render={ () => <Dialogs
              state={ props.state.dialogsPage }
              dispatch={ props.dispatch }
              /> }
          />

        </div>
      </div>
    </BrowserRouter>
  )

  debugger;
}

export default App;
