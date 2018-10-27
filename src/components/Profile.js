import React from "react";
import { API_GET } from "../constants/Default";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faVk,
  faTelegram,
  faYoutube,
  faTwitter,
  faTwitch,
  faChrome
} from "@fortawesome/fontawesome-free-brands";
import * as PropTypes from "prop-types";

class Profile extends React.Component {

  componentDidMount() {
    const url = `${API_GET}/${this.props.id}`;
    this.props.getInfoProfile(url);
  }

  render() {
    const {data, status} = this.props;
    const { city, languages, social } = data;
    return (status) ? (
      <div className="profile">
        <span>Город: {city}</span> <br />
        <span>Знание языков:</span>
        <ul>{languages.map((item, i) =>
          <li key={i}>{item}</li>)}
        </ul>
        <div>
          <span>Ссылки:</span>
          {social.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
            >
              <FontAwesomeIcon
                icon={["fab", `${item.label === "web" ? item.label = "chrome" : item.label}`]}
              />
            </a>
          ))}
        </div>
      </div>
    ) : null
  }
}

Profile.propsTypes = {
  id: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  getInfoProfile: PropTypes.func.isRequired
};

export default Profile;