import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import * as axios from 'axios';  //импорт всего


class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.setUsers(''); //выкл старых юзеров перед добавлением новых
    this.props.toggleIsFetching(true); //load preloader

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {withCredentials: true})
      .then( (response) => {
        this.props.toggleIsFetching(false); //cancel preloader
        this.props.setTotalUsers(response.data.totalCount); //add all users (number)
        this.props.setUsers(response.data.items); //add page users
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setUsers(''); //выкл старых юзеров перед добавлением новых
    this.props.toggleIsFetching(true); //load preloader
    this.props.setCurrentPage(pageNumber); //set click page

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {withCredentials: true})
      .then( (response) => {
        this.props.toggleIsFetching(false); //cancel preloader
        this.props.setTotalUsers(response.data.totalCount); //add all users (number)
        this.props.setUsers(response.data.items); //add page users
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

export default UsersApiComponent;
