import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { auth } from '../store/actions/user_actions';
import { getOverlayStatus } from '../store/actions/site_actions';

export default function(ComposedClass, reload, adminRoute = null) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true
    };

    componentDidMount() {
      this.props.dispatch(auth()).then(response => {
        let user = this.props.user.userData;

        if (user.cart && user.wishlist) {
          this.setState({ loading: false });

          if (!user.isAuth) {
            if (reload) {
              this.props.history.push('/');
              this.props.dispatch(getOverlayStatus(true, true));
            }
          }
        }
      });
    }

    render() {
      const { loading } = this.state;
      return !loading ? (
        <ComposedClass {...this.props} user={this.props.user} />
      ) : (
        <div
          style={{
            margin: '0 auto',
            height: '100vh',
            width: '1100px',
            textAlign: 'center',
            marginTop: '250px'
          }}
        >
          <Loader type="RevolvingDot" color="#404040" height="80" width="80" />
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user
    };
  }

  return connect(mapStateToProps)(AuthenticationCheck);
}
