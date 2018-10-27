import React from "react";
import { connect } from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from "../utils/privateRoute";

import Home from "../components/Home";
import News from "../components/News";
import LoginContainer from "../containers/LoginContainer";
import ProfileContainer from "../containers/ProfileContainer";
import MenuContainer from "../containers/MenuContainer";

class App extends React.Component {
  render() {
    const {isRedirect} = this.props.login;
    return (
      <Router>
        <React.Fragment>
          <MenuContainer/>
          <Route exact path="/" component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/login" component={LoginContainer}/>
          <PrivateRoute authed={isRedirect} path="/profile" component={ProfileContainer}/>
        </React.Fragment>
      </Router>
    )
  }
}

const mapStateToProps = store => ({
  login: store.login
});

export default connect(mapStateToProps)(App);