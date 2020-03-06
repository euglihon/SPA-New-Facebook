import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewValueActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {

  return {
    textareaValue: state.profilePage.textareaValue,
    posts: state.profilePage.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    updatePostText: (text) => {
      dispatch(updateNewValueActionCreator(text));
    },

    addPostItem: () => {
      dispatch(addPostActionCreator());
      dispatch(updateNewValueActionCreator(''));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;
