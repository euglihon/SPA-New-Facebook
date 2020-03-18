import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';  //импорт всего
import userNullImg from '../../assets/images/user-null.png';

class Users extends React.Component {

  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then( (response) => {
          this.props.setUsers(response.data.items)
        })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Get users</button>

        {
          this.props.users.map( (user) => {

            return (
              <div key={user.id} className={classes.userWrapper}>

                <div className={classes.imageBlock}>
                  <img alt='#' src={ user.photos.small == null ? userNullImg : user.photos.small }/>

                  {
                    user.followed
                      ? <button onClick={ () => { this.props.unFollow(user.id) } }>Unfollow</button>
                      : <button onClick={ () => { this.props.follow(user.id) } }>Follow</button>
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
};

export default Users;
