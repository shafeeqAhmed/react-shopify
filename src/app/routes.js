import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import Statistics from "./analytics/Statistics";
import Settings from "components/analytics/Settings";
// import EmailManagement from "./analytics/EmailManagement";
import { getUrlVars, mergeObjects } from "global/functions";
import { paths } from "global/globalVariables";
// import StepsWrapper from "./install/StepsWrapper";
// import VerifyShopify from "./VerifyShopify";
import AnalyticsSubscriber from "components/analytics/AnalyticsSubscriber";
import AnalyticFeeds from "components/analytics/AnalyticFeeds";
import AddTeamMembers from "components/analytics/AddTeamMembers";
import EditTeamMembers from "components/analytics/EditTeamMembers";
import AnalyticInfors from "components/analytics/AnalyticInfors";
import ChartForecast from "components/analytics/Chart";
import ProgressFriday from "components/analytics/ProgressFriday";
import ProductThursday from "components/analytics/ProductThursday";
import CustomerSegmentation from "components/customer/CustomerSegmentation";
import CustomerValueWednesday from "components/customer/CustomerValueWednesday";
import StatErDay from "components/customer/StatErDay";

import createApp from "@shopify/app-bridge";
import { getSessionToken } from "@shopify/app-bridge-utils";

const app = createApp({
  apiKey: process.env.REACT_APP_SHOPIFY_APP_API_KEY,
  host: btoa("distil-dev.myshopify.com"),
});
// const sessionToken = await getSessionToken(app);
getSessionToken(app).then((token) => {
  localStorage.setItem("token", token);
});

export default class Routes extends Component {
  render() {
    const params = { params: getUrlVars(window.location.href) };

    return (
      <BrowserRouter>
        <Switch>
          {/* <Route
            exact
            path={paths.authPath}
            name="Auth Login"
            render={props => <VerifyShopify {...mergeObjects(props, params)} />}
          />
          <Route
            exact
            path={paths.installPath}
            name="Verify Shopify Request"
            render={props => <StepsWrapper {...mergeObjects(props, params)} />}
          /> */}
          <Route
            path={paths.analyticsPath}
            name="Analytics Feeds"
            render={(props) => (
              <AnalyticFeeds {...mergeObjects(props, params)} />
            )}
          />
          <Route
            path={paths.analyticSubscriberPath}
            name="Analytics Subscribers"
            render={(props) => (
              <AnalyticsSubscriber {...mergeObjects(props, params)} />
            )}
          />
          <Route
            path={paths.addTeamMembers}
            name="Add Team Member"
            render={(props) => (
              <AddTeamMembers {...mergeObjects(props, params)} />
            )}
          />
          <Route
            path={paths.editTeamMembers}
            name="Edit Team Member"
            render={(props) => (
              <EditTeamMembers {...mergeObjects(props, params)} />
            )}
          />
          <Route
            path={paths.settingsPath}
            name="Settings"
            render={(props) => <Settings {...mergeObjects(props, params)} />}
          />
          <Route
            path={paths.analyticsInfor}
            name="Analytics Infors"
            render={(props) => (
              <AnalyticInfors {...mergeObjects(props, params)} />
            )}
          />
          <Route
            path={paths.progressFriday}
            name="Progress Friday"
            render={(props) => (
              <ProgressFriday {...mergeObjects(props, params)} />
            )}
          />

          <Route
            path={paths.chartForecast}
            name="Chart Forecast"
            render={(props) => (
              <ChartForecast {...mergeObjects(props, params)} />
            )}
          />

          <Route
            path={paths.customerSegmentation}
            exact
            name="Customer Segmentation"
            render={(props) => (
              <CustomerSegmentation {...mergeObjects(props, params)} />
            )}
          />
          <Route
            path={paths.productThursday}
            name="Product Thursday"
            render={(props) => (
              <ProductThursday {...mergeObjects(props, params)} />
            )}
          />
          <Route
            path={paths.customerWednesday}
            name="Customer Value Wednesday"
            render={(props) => (
              <CustomerValueWednesday {...mergeObjects(props, params)} />
            )}
          />
          <Route
            path={paths.statErDay}
            name="Customer Value Wednesday"
            render={(props) => <StatErDay {...mergeObjects(props, params)} />}
          />
          <Route path={paths.sunDayPath} name="Sunday Page" />
          <Redirect from="/" to={paths.analyticsPath} />
        </Switch>
      </BrowserRouter>
    );
  }
}
