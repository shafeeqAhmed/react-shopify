import React, {Component} from "react";

export default class Setup extends Component {
  state = {
    email: '',
    lastName: '',
    firstName: '',
    storeName: ''
  };

  onFormSubmit = async event => {
    event.preventDefault();
    const {email, lastName, firstName, storeName} = this.state;

    const shopifyData = {
      organisation: {
        shopUrl: this.props.shop,
        token: this.props.token,
        name: storeName
      },
      user: {
        firstName: firstName,
        lastName: lastName,
        email: email
      }
    }

    this.props.goToNextStep(shopifyData);
  }

  render() {
    return (
      <div className="container setup">
        <label>Sign in Data</label>
        <form onSubmit={this.onFormSubmit}>
          <label>Store Name</label>
          <input value={this.state.storeName} type="text" onChange={e => this.setState({storeName: e.target.value})}
                 name="Store Name"/>
          <label>First Name</label>
          <input value={this.state.firstName} type="text" onChange={e => this.setState({firstName: e.target.value})}
                 name="First Name"/>
          <label>Last Name</label>
          <input value={this.state.lastName} type="text" onChange={e => this.setState({lastName: e.target.value})}
                 name="Last Name"/>
          <label>Email</label>
          <input value={this.state.email} onChange={e => this.setState({email: e.target.value})} type="text"/>
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}
