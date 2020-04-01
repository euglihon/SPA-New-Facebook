import React from 'react';
import Profile from './Profile';
import { getProfileDataThunk } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {

    let userId = this.props.match.params.userId //withRoute and app profile patch
    if (userId === undefined) {
      userId = 2;
    }

    this.props.getProfileDataThunk(userId);
  }

  render() {
    return (
      <Profile {...this.props} /> //Передача всех пропсов
    )
  }
}


const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}


export default compose (
  connect( mapStateToProps, { getProfileDataThunk } ),
  withRouter,
  withAuthRedirect
 ) (ProfileContainer)
