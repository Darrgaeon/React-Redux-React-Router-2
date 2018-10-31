import React from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";

import { API_POST } from "../constants/Default";
import * as PropTypes from "prop-types";
import { testPassword } from '../utils/inputs';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChangeEmail(e) {
    e.preventDefault();
    let email = this.refs.emailField.value;

    this.setState({
      email: email
    })

  }

  handleChangePassword(e) {
    e.preventDefault();
    let password = this.refs.passwordField.value;

    this.setState({
      password: password
    })

  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.password !== "12345" || this.state.email !== "max@test.com") {
      alert("Имя пользователя или пароль введены не верно");
    }

    this.props.getUserLogin(API_POST, this.state.email, this.state.password);

    this.setState({
      email: "",
      password: ""
    });
    this.refs.passwordField.value = ""

  }

  validate() {
    const { password } = this.state;
    return testPassword(password);
  }

  render() {

    if (this.props.isRedirect) {
      return <Redirect to={{pathname: "/profile"}} />
    }

    return (
        <div className="login">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <input ref="emailField"  type="email" name="email" id="email" placeholder="Введите email" onChange={this.handleChangeEmail}/>
            <input ref="passwordField"  type="password" name="password" id="password" placeholder="Введите пароль" onChange={this.handleChangePassword}/>
            <Button color="btn btn-primary btn-block btn-large" disabled={!this.validate()} type="submit" >Войти</Button>
          </form>
        </div>
    )
  }
}

Login.propsTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  isRedirect: PropTypes.bool.isRequired,
  getUserLogin: PropTypes.func.isRequired
};

export default Login;