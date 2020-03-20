import React from 'react';
import UsersApiComponent from './UsersApiComponent';
import { connect } from 'react-redux';
import { followActionCreator, unFollowActionCreator, setUsersActionCreation, setCurrentPageActionCreation, setTotalUserCountActionCreation } from '../../redux/usersReducer';


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    },

    setCurrentPage: (page) => {
      dispatch(setCurrentPageActionCreation(page));
    },

    setTotalUsers: (totalUsers) => {
      dispatch(setTotalUserCountActionCreation(totalUsers));
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersApiComponent);

export default UsersContainer;

