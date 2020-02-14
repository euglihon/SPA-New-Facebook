import React from 'react';

import classes from'./NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <a href='s#'>Profile</a>
      </div>
      <div className={classes.item}>
        <a href='s#'>Messages</a>
      </div>
      <div className={classes.item}>
        <a href='s#'>News</a>
      </div>
      <div className={classes.item}>
        <a href='s#'>Music</a>
      </div>
      <div className={classes.item}>
        <a href='s#'>Settings</a>
      </div>
    </nav>
  )
}

export default NavBar;