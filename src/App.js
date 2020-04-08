import React, { Component } from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";
import "./styles.css";

class App extends Component {
  state = {
    profiles: []
  };

  addNewProfile = profileData => {
    this.setState(prevState => ({
      profiles: [profileData, ...prevState.profiles]
    }));
  };

  render() {
    return (
      <div className="App">
        <h1> The GitHub Cards App </h1>
        <Form onSend={this.addNewProfile} />
        <CardList profileCard={this.state.profiles} />
      </div>
    );
  }
}

export default App;
