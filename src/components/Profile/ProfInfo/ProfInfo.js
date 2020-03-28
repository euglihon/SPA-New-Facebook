import React from 'react';
import classes from './ProfInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import nullProfileImg from '../../../assets/images/user-null.png'

const ProfInfo = (props) => {
  if (props.profile === null || undefined) {
    return (
      <Preloader />
    )
  } else {
    return (
      <div>
        <div>
          <img alt='#' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ucdmc.ucdavis.edu%2Femergency%2Fimages%2Fbody%2Fwilderness%2Fwilderness_wide_01.jpg&f=1&nofb=1' />
        </div>

        <div className={classes.infoBlock}>
          <div>
            <img className={classes.profileImg} alt='profile avatar'
              src={
                props.profile.photos.large != null || undefined
                  ? props.profile.photos.large
                  : nullProfileImg
              }
            />
          </div>

          <div className={classes.contactBlock}>
            <h1>{props.profile.fullName}</h1>
            <p>{props.profile.aboutMe}</p>

            <div className={classes.links}>
              <div>Contacts</div>
              <a href={props.profile.contacts.github}>GitHub</a>
              <a href={props.profile.contacts.facebook}>Facebook</a>
              <a href={props.profile.contacts.vk}>VK</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfInfo;
