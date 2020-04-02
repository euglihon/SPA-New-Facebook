import React from 'react';
import classes from './Profile.module.css';
import ProfInfo from './ProfInfo/ProfInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
  return (
    <div>
      <ProfInfo
        profile={props.profile}
        status={props.status}
        updateProfileStatusThunk={props.updateProfileStatusThunk}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;

