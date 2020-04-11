import React, { Component } from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";
import "./styles.css";

class App extends Component {
  state = {
    profiles: []
  };

  urlImage =
    "https://images.unsplash.com/photo-1579852915565-3e7ca937ade9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjc5MTU0fQ ";

  addNewProfile = profileData => {
    this.setState(prevState => ({
      profiles: [profileData, ...prevState.profiles]
    }));
  };

  cityPic = props => {
    console.log("it is works", props);
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: "url('" + this.urlImage + "')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          position: "fixed"
        }}
      >
        <div>
          <h1 className="App"> GitHub Cards App V1 </h1>
          <p>
            {" "}
            In the next version i will use APOLLO and GraphQL instead axios{" "}
          </p>
          <Form onSend={this.addNewProfile} />
          <CardList profileCard={this.state.profiles} cityPic={this.cityPic} />
        </div>
      </div>
    );
  }
}

export default App;
