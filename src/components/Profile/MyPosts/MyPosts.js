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

  const newPostElement = React.createRef();

  const addPostItem = () => {

    props.dispatch( addPostActionCreator() );
    props.dispatch( updateNewValueActionCreator('') );
  }

  const updateNewValue = () => {
    const text = newPostElement.current.value;
    props.dispatch( updateNewValueActionCreator(text) );
  }

  return (
    <div>
      <h3>My posts</h3>

      <div>
        <textarea onChange={ updateNewValue } ref={ newPostElement } value={ props.textareaValue }
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
