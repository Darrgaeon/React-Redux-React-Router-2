import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserLogin } from "../actions/LoginActions";
import Login from "../components/Login";

class LoginContainer extends React.Component {
  render() {
    const { login } = this.props;
    return (
      <Login
        isRedirect={login.isRedirect}
        getUserLogin={this.props.getUserLogin}
        error={login.message}
      />
    );
  }
}

const mapStateToProps = store => ({
  login: store.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getUserLogin
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);