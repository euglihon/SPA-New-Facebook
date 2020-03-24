import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar'
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import { Route } from 'react-router-dom';


const App = () => {

  return (
      <div className='app-wrapper'>

        <HeaderContainer />
        <NavBar />

        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
          <Route path='/messages' render={ () => <DialogsContainer /> } />
          <Route path='/users' render ={ () => <UsersContainer /> } />
        </div>
      </div>
  )
}

export default App;
