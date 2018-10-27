import React from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";

import { API_POST } from "../constants/Default";
import * as PropTypes from "prop-types";
import { testPassword, testEmail } from '../utils/inputs';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      checkClear: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    let value = e.currentTarget.value;
    let fieldName = e.currentTarget.dataset.fieldName;

    // if (this.state.checkClear) {
    //   console.log("!!!");
    //
    //   e.currentTarget.value = "";
    //   this.setState( ({
    //     checkClear: false
    //   }))
    //
    // }

    this.setState(prev => ({
      ...prev,
      [fieldName]: value,
    }));

  }

  handleSubmit(e) {
    e.preventDefault();

    // this.setState(({
    //   checkClear: true
    // }));

    this.props.getUserLogin(API_POST, this.state.email, this.state.password);

    if (this.state.password !== "12345" || this.state.email !== "max@test.com") {
      alert("Имя пользователя или пароль введены не верно");
    }

  }

  validate() {
    const { email, password } = this.state;
    if (!testPassword(password)) {
      return false
    }
    return testEmail(email);

  }

  // handleEmail(e) {
  //   e.preventDefault();
  //   let email = e.target.value;
  //
  //   this.setState({
  //     email: email
  //   });
  // }
  //
  // handlePassword(e) {
  //   e.preventDefault();
  //   let password = e.target.value;
  //
  //   this.setState({
  //     password: e.target.value
  //   });
  //
  // }

  render() {

    if (this.props.isRedirect) {
      return <Redirect to={{pathname: "/profile"}} />
    }

    return (
        <div className="login">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <input data-field-name="email" type="email" name="email" id="email" placeholder="Введите email" onChange={this.handleChange}/>
            <input data-field-name="password" type="password" name="password" id="password" placeholder="Введите пароль" onChange={this.handleChange}/>
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