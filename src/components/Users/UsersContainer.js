import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsers, toggleIsFetching } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setUsers(''); //выкл старых юзеров перед добавлением новых
    this.props.toggleIsFetching(true); //load preloader

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)  //api get func
      .then( (data) => {      //return api get func
        this.props.toggleIsFetching(false); //cancel preloader
        this.props.setTotalUsers(data.totalCount); //add all users (number)
        this.props.setUsers(data.items); //add page users
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setUsers(''); //выкл старых юзеров перед добавлением новых
    this.props.toggleIsFetching(true); //load preloader
    this.props.setCurrentPage(pageNumber); //set click page

    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then( (data) => {
        this.props.toggleIsFetching(false); //cancel preloader
        this.props.setTotalUsers(data.totalCount); //add all users (number)
        this.props.setUsers(data.items); //add page users
      } )
  }

  render() {
    return (
      <div>

        <div>
          {
            this.props.isFetching === true
              ? <Preloader />
              : null
          }
        </div>

        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
        />
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect( mapStateToProps, { follow, unFollow, setUsers, setCurrentPage, setTotalUsers, toggleIsFetching }) (UsersContainer);


