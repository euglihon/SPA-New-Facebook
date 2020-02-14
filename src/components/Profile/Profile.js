import React from 'react';

import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img alt='#' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ucdmc.ucdavis.edu%2Femergency%2Fimages%2Fbody%2Fwilderness%2Fwilderness_wide_01.jpg&f=1&nofb=1' />
      </div>
        
      <div>
        avatar + descriptions
      </div>

      <div>
        My posts
      </div>

      <div>
        new post
      </div>
      
      <div>
        <div>post 1</div>
        <div>post 2</div>
        <div>post 3</div>
      </div>
    </div>
  )
}

export default Profile;

