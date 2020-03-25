import React from 'react';
import classes from './Users.module.css';
import userNullImg from '../../assets/images/user-null.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


const Users = (props) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); //округление в бол. сторону

  const pages = [];
  for(let p = 1; p <= pagesCount; p++) {
    pages.push(p);
  }


  return (
    <div>
      {
        pages.map( (page) => {
          return <span
            className={props.currentPage === page ? classes.selectPage : ''}
            onClick={ (event) => { props.onPageChanged(page); } }
            >
              {page}
            </span>
        } )
      }

      {
        props.users.map( (user) => {

          return (
            <div key={user.id} className={classes.userWrapper}>

              <div className={classes.imageBlock}>

                <NavLink to={`/profile/${user.id}`}>
                  <img alt='#' src={ user.photos.small == null ? userNullImg : user.photos.small }/>
                </NavLink>

                {
                  user.followed
                    ? <button onClick={ () => {
                        axios
                          .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                  { withCredentials: true,
                                    headers: {
                                      'API-KEY': '1aa28f91-66e0-43de-9c03-07fbb8ee7bd0'
                                    }
                                  }
                                )
                          .then( (response) => {
                            if (response.data.resultCode === 0) {
                              props.unFollow(user.id);
                            }
                          })
                        }}>Unfollow</button>

                    : <button onClick={ () => {
                        axios
                          .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                  {},
                                  { withCredentials: true,
                                    headers: {
                                      'API-KEY': '1aa28f91-66e0-43de-9c03-07fbb8ee7bd0'
                                    }
                                  }
                                )
                          .then( (response) => {
                            if (response.data.resultCode === 0) {
                              props.follow(user.id);
                            }
                          })
                        }}>Follow</button>
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

export default Users

