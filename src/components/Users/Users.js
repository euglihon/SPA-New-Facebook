import React from 'react';
import classes from './Users.module.css';
import usersReducer from '../../redux/usersReducer';

const Users = (props) => {
  return (
    <div>
      {
        props.users.map( (user) => {

          return (
            <div key={user.id} className={classes.userWrapper}>

              <div className={classes.imageBlock}>
                <img alt='#' src={ user.photoUrl }/>

                { user.followed ?  <button>Unfollow</button> : <button>Follow</button> }

              </div>

              <div className={classes.contentBock}>
                <div>
                  <div>{ user.name }</div>
                  <div>{ user.status }</div>
                </div>
                <div>
                  <div>{ user.location.country }</div>
                  <div>{ user.location.city }</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Users;
