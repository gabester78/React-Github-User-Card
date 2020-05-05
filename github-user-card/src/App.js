import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./Components/UserCard";
import FollowerList from "./Components/FollowerList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gabe: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/gabester78")
      .then((response) => {
        console.log(response.data);
        this.setState({ gabe: response.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <UserCard gabe={this.state.gabe} />
        <FollowerList />
      </div>
    );
  }
}

export default App;
