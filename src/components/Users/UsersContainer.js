import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, unFollowActionCreator, setUsersActionCreation } from '../../redux/usersReducer';


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },

    unFollow: (userId) => {
      dispatch(unFollowActionCreator(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersActionCreation(users));
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;

