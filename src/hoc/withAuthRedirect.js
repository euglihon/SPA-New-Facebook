import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const withAuthRedirect = (Component) => {
  class RedirectContainer extends React.Component {
    render() {

      if (this.props.isAuth === false) { return <Redirect to={'/login'} /> }

      else { return <Component {...this.props} /> }
    }
  }

  const mapStateToPropsForRedirect = (state) => {
    return {
      isAuth: state.auth.isAuth
    }
  }

  const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectContainer)
  return ConnectedRedirectComponent;
}

export default withAuthRedirect;
