import React, { Component } from "react";
import axios from "axios";
import classes from "./comstyle.module.css";

class Form extends Component {
  state = { userName: "" };

  handleSubmit = async event => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSend(resp.data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={classes.myForm}>
        <input
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          type="text"
          placeholder="GitHub username"
        />
        <button> Add card </button>
      </form>
    );
  }
}

export default Form;
