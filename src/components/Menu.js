import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar } from "reactstrap";
import * as PropTypes from "prop-types";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.loginExitButton = this.loginExitButton.bind(this);
  }

  loginExitButton() {
    this.props.loginRequest();
  }

  render() {
    const {isRedirect} = this.props;

    return (
      <div >
        <Navbar color="primary" light expand="md">
          <Link to="/">Главная</Link>
          <Link to="/news">Новости</Link>
          <Link to="/profile">Профиль</Link>
          {isRedirect ? <Button color="btn btn-btn btn-exit btn-large" onClick={this.loginExitButton}>Выйти</Button> : null}
        </Navbar>
      </div>
    )
  }
}

Menu.propsTypes = {
  isRedirect: PropTypes.bool.isRequired,
  loginRequest: PropTypes.func.isRequired
};

export default Menu;