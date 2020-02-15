import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfInfo from './ProfInfo/ProfInfo';

const Profile = () => {
  return (
    <div>

      <ProfInfo />

      <MyPosts />

    </div>
  )
}

export default Profile;

