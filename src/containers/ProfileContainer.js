import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getInfoProfile } from "../actions/ProfileActions";
import Profile from "../components/Profile";

class ProfileContainer extends React.Component {
  render() {
    return (
      <Profile
        id={this.props.login.id}
        getInfoProfile={this.props.getInfoProfile}
        data={this.props.profile.data}
        status={this.props.profile.status}

      />
    )
  }
}

const mapStateToProps = store => ({
  profile: store.profile,
  login: store.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getInfoProfile
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);