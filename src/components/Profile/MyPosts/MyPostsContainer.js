import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewValueActionCreator } from '../../../redux/profileReducer';


const MyPostsContainer = (props) => {

  const addPostItem = () => {
    props.dispatch(addPostActionCreator());
    props.dispatch(updateNewValueActionCreator(''));
  }

  const onPostChange = (text) => {
    props.dispatch(updateNewValueActionCreator(text));
  }

  return (
    <MyPosts updatePostText={onPostChange}
      addPostItem={addPostItem}
      posts={props.state.posts}
      newPostText={props.state.textareaValue}
    />
  )
}

export default MyPostsContainer;
