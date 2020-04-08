import React, { Component } from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";
import "./styles.css";

class App extends Component {
  state = {
    profiles: []
  };

  urlImage = "";

  addNewProfile = profileData => {
    this.setState(prevState => ({
      profiles: [profileData, ...prevState.profiles]
    }));
  };

  cityPic = props => {
    console.log("it is works", props);
  };

  componentDidMount() {
    this.urlImage = this.props;
  }

  render() {
    return (
      <div
        style={{
          background: "url('" + this.urlImage + "')",
          width: "100%",
          height: "100%",
          position: "fixed"
        }}
      >
        <div className="App">
          <h1> The GitHub Cards App </h1>
          <Form onSend={this.addNewProfile} />
          <CardList profileCard={this.state.profiles} cityPic={this.cityPic} />
        </div>
      </div>
    );
  }
}

export default App;
