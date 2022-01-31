import React, {Component} from "react";

export default class Legal extends Component {
  state = {};

  render() {
    return (
      <div className="container legal">
        <div>Legal</div>
        <button onClick={() => this.props.goToNextStep({})}>Next</button>
      </div>
    )
  }
}
