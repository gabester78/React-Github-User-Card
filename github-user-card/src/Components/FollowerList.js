import React from "react";
import axios from "axios";

class FollowerList extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/gabester78/followers")
      .then((response) => {
        console.log(response.data, "followers data");
        this.setState({ followers: response.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="followersList">
        {this.state.followers.map((data) => (
          <div className="cardContainer">
            <div className="cardHeader">
              <h1>{data.login}</h1>
              <img
                src={data.avatar_url}
                alt="Profile Avatar"
                width="25%"
                height="25%"
              ></img>
            </div>
            <div>
              <a
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="gitLink"
              >
                Full Github Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default FollowerList;
