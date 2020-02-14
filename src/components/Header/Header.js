import React from 'react';

import classes from './Header.module.css';


const Header = () => {
  return (
    <header className={classes.header}>
      <img alt='#' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F0%2F06%2FJIS_College_of_Engineering_Logo.png&f=1&nofb=1' />
    </header>
  )
}

export default Header;