import React from 'react';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';


class ProfileContainer extends React.Component {
  componentDidMount() {

    let userId = this.props.match.params.userId //withRoute and app profile patch
    if (userId === undefined) {
      userId = 2;
    }

    profileAPI.getProfile(userId)
        .then( (data) => {
          this.props.setUserProfile(data)
        })
  }

  render() {
    return (
      <Profile {...this.props} /> //Передача всех пропсов
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer); // add URL information in ProfileContainer

export default connect ( mapStateToProps, {setUserProfile} ) (WithUrlDataContainerComponent);
