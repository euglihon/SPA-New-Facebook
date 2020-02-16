import React from 'react';
import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={classes.dialogItem}>
      <img alt='#' src='https://cdn.pixabay.com/photo/2016/11/14/13/48/aerial-1823546_960_720.jpg' />
      <NavLink to={`/messages/${props.id}`}
        activeClassName={classes.activeLink} >
        {props.name}
      </NavLink>
    </div>
  )
}

export default DialogItem;
