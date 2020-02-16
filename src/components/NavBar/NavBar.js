import React from 'react';

import classes from'./NavBar.module.css'
import MainLinksBlock from './MainLinksBlock/MainLinksBlock';
import FriendsBlock from './FriendsBlock/FriendsBlock';

const NavBar = (props) => {

  return (
    <div className={classes.navBar}>
      <MainLinksBlock />


      <b>Friends</b>

      <div className={classes.friendContainer}>
        {
          props.friends.map(  (friendsElement) => {
            return (
              <FriendsBlock name={friendsElement.name} />
            )
          })
        }
      </div>

    </div>
  )
}

export default NavBar;
