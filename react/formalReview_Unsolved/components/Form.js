import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  usernameChange = (event) => {
    this.setState({ username: event.target.value})
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          onChange= {this.usernameChange}
          value = {this.state.username}
          type="text"
          placeholder="Username"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
