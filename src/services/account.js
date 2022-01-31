import axios from "axios";
import {globalConstants} from "../global/globalVariables";

export function createShopifyOrganisation(data) {
  const requestUrl = globalConstants.BASE_URL + globalConstants.URL_INITIAL + "org/private/shopify";
  return axios.post(requestUrl, data).then(response => {
    return response.data;
  });
}
