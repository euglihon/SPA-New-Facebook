import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.post}>

      <img alt='#' href='https://cdn.pixabay.com/photo/2016/11/14/13/48/aerial-1823546_960_720.jpg' />

      { props.message }

      <div>
        <span>Like { props.likes }</span>
      </div>

    </div>
  )
}

export default Post;
