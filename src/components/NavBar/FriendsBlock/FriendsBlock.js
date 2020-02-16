import React from 'react';

import classes from './FriendsBlock.module.css';


const FriendsBlock = (props) => {
  return(
    <div className={classes.friendsBlock}>
        <img alt='#'
          src='https://cdn.pixabay.com/photo/2016/11/14/13/48/aerial-1823546_960_720.jpg'
        />
        <span>{ props.name }</span>
    </div>
  )
}

export default FriendsBlock;
