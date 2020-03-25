import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img alt='#' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F0%2F06%2FJIS_College_of_Engineering_Logo.png&f=1&nofb=1' />

      <div className={classes.loginBlock}>
        {
          props.isAuth === true
          ? <b>{props.loginName}</b>
          : <NavLink to={'/login'}>Login</NavLink>

        }
      </div>

    </header>
  )
}

export default Header;
