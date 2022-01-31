import React, {Component} from "react";
import {paths} from "../../global/globalVariables";
import Setup from "./Setup";
import Greetings from "./Greetings";
import Legal from "./Legal";
import Complete from "./Complete";
import '../../styles/app.scss'

class StepsWrapper extends Component {
  steps = ["GREETINGS", "SETUP", "LEGAL", "COMPLETE"];

  state = {
    currentStep: "GREETINGS",
    stepData: {
      "GREETINGS": {},
      "SETUP": {},
      "LEGAL": {},
      "COMPLETE": {}
    }
  };

  goToNextStep = (filledStepData) => {
    const {stepData, currentStep} = this.state;
    stepData[currentStep] = filledStepData;
    const nextStep = this.steps[Math.min(this.steps.indexOf(currentStep) + 1, this.steps.length)];
    this.setState({currentStep: nextStep, stepData});
  }

  renderStepSection(currentStep, stepData) {
    switch (currentStep) {
      case "GREETINGS":
        return <Greetings goToNextStep={this.goToNextStep}/>
      case "SETUP":
        return <Setup goToNextStep={this.goToNextStep} shop={this.props.params?.shop} token={this.props.params?.code}/>
      case "LEGAL":
        return <Legal goToNextStep={this.goToNextStep}/>
      case "COMPLETE":
        return <Complete goToNextStep={this.goToNextStep} data={stepData}/>
      default:
        this.props.history.push(paths.installPath);
    }
  }

  render() {
    const {currentStep, stepData} = this.state;
    return (
      <div className="container wrapper">
        <h2 className="header">Header</h2>
        {this.renderStepSection(currentStep, stepData)}
      </div>
    );
  }
}

export default StepsWrapper;
