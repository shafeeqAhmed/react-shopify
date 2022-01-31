import React, {Component} from "react";

export default class Greetings extends Component {
  state = {};

  render() {
    return (
      <div className="container greetings">
        <div>Hi there!</div>
        <button onClick={() => this.props.goToNextStep({})}>Next</button>
      </div>
    )
  }
}
