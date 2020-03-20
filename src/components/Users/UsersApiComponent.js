import React from 'react';
import Users from './Users';
import * as axios from 'axios';  //импорт всего

class UsersApiComponent extends React.Component {

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then( (response) => {
        this.props.setTotalUsers(response.data.totalCount); //add all users (number)
        this.props.setUsers(response.data.items); //add page users
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then( (response) => {
        this.props.setTotalUsers(response.data.totalCount); //add all users (number)
        this.props.setUsers(response.data.items); //add page users
      } )
  }

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
      />
    )
  }
};

export default UsersApiComponent;
