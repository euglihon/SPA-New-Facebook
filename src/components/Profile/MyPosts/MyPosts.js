import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

import { addPostActionCreator, updateNewValueActionCreator } from '../../../redux/state';



const MyPosts = (props) => {

  let postsItems = props.posts.map( (postElement) => {
    return (
      <Post message={postElement.messageText} likes={postElement.likesCount} />
    )
  });


  const addPostItem = () => {
    props.dispatch( addPostActionCreator() );
    props.dispatch( updateNewValueActionCreator('') );
  }

  const updateNewValue = (event) => {
    const text = event.target.value;
    props.dispatch( updateNewValueActionCreator( text) );
  }

  return (
    <div>
      <h3>My posts</h3>

      <div>
        <textarea onChange={ updateNewValue } value={ props.textareaValue }
        />
        <button onClick={ addPostItem }>add posts</button>
      </div>

      <div>
        { postsItems }
      </div>

    </div>
  )
}

export default MyPosts;
