import React, { Component } from 'react';
import RegistrationForm from './registration-form';
import { connect } from 'react-redux';
import Questions from '../components/questions';

class Home extends Component {
  render() {
    let show;
    if (!this.props.currentUser) {
      show = <RegistrationForm />;
    }
    return (
      <div>
        {show}
        <Questions />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Home);
