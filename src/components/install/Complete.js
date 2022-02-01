import React, {Component} from "react";
import {createShopifyOrganisation} from "services/account";

export default class Complete extends Component {
  state = {
    orgIsCreated: true
  };

  createShopifyOrg = () => {
    const orgData = this.props.data.SETUP;
    createShopifyOrganisation(orgData)
      .then(_ => this.setState({orgIsCreated: true}));
  }

  redirectToShopify = () => {
    const shopUrl = this.props.data.SETUP.organisation.shopUrl;
    window.location.href = `https://${shopUrl}/admin/apps/${process.env.REACT_APP_SHOPIFY_APP_API_KEY}`;
  }

  render() {
    const {orgIsCreated} = true;

    return (
      <div className="container complete">
        <div>Complete</div>
        <button onClick={this.createShopifyOrg}>Complete</button>
        <button onClick={this.redirectToShopify}>Go back to Shopify</button>
        {/* {orgIsCreated && <button onClick={this.redirectToShopify}>Go back to Shopify</button>} */}
      </div>
    )
  }
}
