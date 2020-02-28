import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfInfo from './ProfInfo/ProfInfo';

const Profile = (props) => {

  return (
    <div>

      <ProfInfo />

      <MyPosts
        posts={props.localState.posts}
        textareaValue={props.localState.textareaValue}
        dispatch={props.dispatch}
        />

    </div>
  )
}

export default Profile;

