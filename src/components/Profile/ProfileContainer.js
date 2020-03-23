import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfile } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
  componentDidMount() {

    let userId = this.props.match.params.userId //withRoute and app profile patch
    if (userId === undefined) {
      userId = 2;
    }

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then( (response) => {
        this.props.setUserProfile(response.data);
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
