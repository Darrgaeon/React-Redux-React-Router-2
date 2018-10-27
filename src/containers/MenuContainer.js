import React from "react";
import { connect } from "react-redux";
import { loginRequest } from "../actions/LoginActions";
import { bindActionCreators } from "redux";
import Menu from "../components/Menu";

class MenuContainer extends React.Component {
  render() {
    return (
      <Menu
        isRedirect={this.props.login.isRedirect}
        loginRequest={this.props.loginRequest}
      />
    )
  }
}

const mapStateToProps = store => ({
  login: store.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    loginRequest
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);