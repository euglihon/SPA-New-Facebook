import React from 'react';
import classes from './Profile.module.css';
import ProfInfo from './ProfInfo/ProfInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

  return (
    <div>

      <ProfInfo />

      <MyPostsContainer state={props.state} dispatch={props.dispatch} />

    </div>
  )
}

export default Profile;

