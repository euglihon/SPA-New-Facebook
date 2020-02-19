import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfInfo from './ProfInfo/ProfInfo';

const Profile = (props) => {

  return (
    <div>

      <ProfInfo />

      <MyPosts posts={props.localState.posts} addPost={props.addPost} />

    </div>
  )
}

export default Profile;

