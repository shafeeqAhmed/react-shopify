import React, {Component} from "react";
import ShopifyConfiguration from './../app/shopifyConfiguration';
import {paths} from "../global/globalVariables";

export default class VerifyShopify extends Component {
  state = {};

  constructor(props) {
    super(props);

    const params = props.params;
    const token = ShopifyConfiguration.shopifyToken;

    if (params && token.verifyHmac(params)) {
      window.location.href = token.generateAuthUrl(params.shop, process.env.SHOPIFY_APP_SCOPES, token.generateNonce());
    }

    console.error("Hmac is not verified or params is empty!");
    this.props.history.push(paths.authPath);
  }

  render() {
    return <div className="container">Loading...</div>;
  }
}
