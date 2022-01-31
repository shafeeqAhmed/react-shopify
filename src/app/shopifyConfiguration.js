import ShopifyToken from 'shopify-token';
import {globalConstants, paths} from "../global/globalVariables";

export default {
  shopifyToken: new ShopifyToken({
    apiKey: process.env.REACT_APP_SHOPIFY_APP_API_KEY,
    sharedSecret: process.env.REACT_APP_SHOPIFY_APP_SECRET,
    redirectUri: globalConstants.APP_URL + paths.installPath,
    scopes: process.env.REACT_APP_SHOPIFY_APP_SCOPES
  })
}
