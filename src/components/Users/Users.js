import React from 'react';
import classes from './Users.module.css';
import userNullImg from '../../assets/images/user-null.png';
import { NavLink } from 'react-router-dom';


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
                  user.followed === true

                    ? <button disabled={props.followingInProgress.some((id) => id === user.id)}

                    onClick={ () => { props.unFollowThunk(user.id) } }>Unfollow</button>


                    : <button disabled={props.followingInProgress.some((id) => id === user.id)}

                    onClick={ () => { props.followThunk(user.id) } }>Follow</button>
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

