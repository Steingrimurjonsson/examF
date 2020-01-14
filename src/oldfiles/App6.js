import React, { Component } from "react";

export default class Jokes extends Component {
  state = {
    hasErrors: false,
    jokes: {}
  };

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(res => this.setState({ jokes: res }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    return <div>{JSON.stringify(this.state.jokes.value)}</div>;
  }
}