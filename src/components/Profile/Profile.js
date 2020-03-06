import React from 'react';
import classes from './Profile.module.css';
import ProfInfo from './ProfInfo/ProfInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = () => {

  return (
    <div>

      <ProfInfo />

      <MyPostsContainer />

    </div>
  )
}

export default Profile;

