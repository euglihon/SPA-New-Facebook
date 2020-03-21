import React from 'react';
import UsersApiComponent from './UsersApiComponent';
import { connect } from 'react-redux';
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsers, toggleIsFetching } from '../../redux/usersReducer';


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followActionCreator(userId));
//     },

//     unFollow: (userId) => {
//       dispatch(unFollowActionCreator(userId));
//     },

//     setUsers: (users) => {
//       dispatch(setUsersActionCreation(users));
//     },

//     setCurrentPage: (page) => {
//       dispatch(setCurrentPageActionCreation(page));
//     },

//     setTotalUsers: (totalUsers) => {
//       dispatch(setTotalUserCountActionCreation(totalUsers));
//     },

//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingActionCreation(isFetching));
//     }
//   }
// }


const UsersContainer = connect( mapStateToProps,
      { follow, unFollow, setUsers, setCurrentPage, setTotalUsers, toggleIsFetching }
      ) (UsersApiComponent);

export default UsersContainer;

