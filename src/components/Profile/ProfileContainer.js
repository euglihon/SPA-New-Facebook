import React from 'react';
import Profile from './Profile';
import { getProfileDataThunk } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';


class ProfileContainer extends React.Component {
  componentDidMount() {

    let userId = this.props.match.params.userId //withRoute and app profile patch
    if (userId === undefined) {
      userId = 2;
    }

    this.props.getProfileDataThunk(userId);
  }

  render() {
    if (this.props.isAuth === false) { return <Redirect to={'/login'} /> }
    return (
      <Profile {...this.props} /> //Передача всех пропсов
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer); // add URL information in ProfileContainer

export default connect ( mapStateToProps, { getProfileDataThunk } ) (WithUrlDataContainerComponent);
