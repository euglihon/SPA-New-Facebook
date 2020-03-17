import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';  //импорт всего

const Users = (props) => {

  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then( (response) => {
        props.setUsers(response.data.items)
      })
  }

  return (
    <div>
      {
        props.users.map( (user) => {

          return (
            <div key={user.id} className={classes.userWrapper}>

              <div className={classes.imageBlock}>
                <img alt='#' src={ user.photoUrl }/>

                {
                  user.followed
                    ? <button onClick={ () => { props.unFollow(user.id) } }>Unfollow</button>
                    : <button onClick={ () => { props.follow(user.id) } }>Follow</button>
                }

              </div>

              <div className={classes.contentBock}>
                <div>
                  <div>{ user.name }</div>
                  <div>{ user.status }</div>
                </div>
                <div>
                  {/* <div>{ user.location.country }</div> */}
                  {/* <div>{ user.location.city }</div> */}
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
