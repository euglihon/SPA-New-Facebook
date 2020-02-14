import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div>

      My posts

      <div>
        <textarea></textarea>
        <button>add posts</button>
      </div>

      <div className={classes.posts}>

        <Post message='Hello New-Facebook' likes='5'/>
        <Post message='Hello React' likes='10' />

      </div>

    </div>
  )
}

export default MyPosts;
