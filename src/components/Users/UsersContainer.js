import React from 'react';
import { connect } from 'react-redux';
import { getUsersThunk, followThunk, unFollowThunk } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersThunk(pageNumber, this.props.pageSize)
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
          onPageChanged={this.onPageChanged}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          followThunk={this.props.followThunk}
          unFollowThunk={this.props.unFollowThunk}
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

//export default connect( mapStateToProps, { getUsersThunk, followThunk, unFollowThunk }) (UsersContainer);


export default compose (
  connect( mapStateToProps, { getUsersThunk, followThunk, unFollowThunk }),
  withAuthRedirect
) (UsersContainer)
