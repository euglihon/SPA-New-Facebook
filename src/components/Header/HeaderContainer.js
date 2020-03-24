import React from 'react';
import * as axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me',
        {withCredentials: true})  //add auth cookie (+login website)
        .then( (response) => {
          if (response.data.resultCode === 0) {   //login --> true
            const {id, email, login} = response.data.data
            this.props.setAuthUserData(id, email, login);
          };
      } );
  };

  render() {
    return (
      <Header {...this.props} />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    loginName: state.auth.login
  }
}

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);
