import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsItems = props.posts.map( (postElement) => {
    return (
      <Post message={postElement.messageText} likes={postElement.likesCount} />
    )
  });

  return (
    <div>
      My posts

      <div>
        <textarea></textarea>
        <button>add posts</button>
      </div>

      <div>
        { postsItems }
      </div>

    </div>
  )
}

export default MyPosts;
