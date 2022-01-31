import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import Statistics from "./analytics/Statistics";
import Settings from "./analytics/Settings";
// import EmailManagement from "./analytics/EmailManagement";
import { getUrlVars, mergeObjects } from "../global/functions";
import { paths } from "../global/globalVariables";
// import StepsWrapper from "./install/StepsWrapper";
// import VerifyShopify from "./VerifyShopify";
import AnalyticsSubscriber from "./analytics/AnalyticsSubscriber";
import AnalyticFeeds from "./analytics/AnalyticFeeds";
import AddTeamMembers from "./analytics/AddTeamMembers";
import EditTeamMembers from "./analytics/EditTeamMembers";

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
            name="Add Team Member"
            render={(props) => (
              <EditTeamMembers {...mergeObjects(props, params)} />
            )}
          />
          <Route
            path={paths.settingsPath}
            name="Settings"
            render={(props) => <Settings {...mergeObjects(props, params)} />}
          />
          <Redirect from="/" to={paths.analyticsPath} />
        </Switch>
      </BrowserRouter>
    );
  }
}
