const localDebuggingConstants = {
  APP_URL: "https://b8e1c92f61f9.ngrok.io",
  BASE_URL: "http://localhost:8086",
};

const stagingGlobalConstants = {
  APP_URL: "https://staging.distil.ai",
  BASE_URL: "https://staging-api.distil.ai:8888",
};

const productionGlobalConstants = {
  APP_URL: "https://data.distil.ai",
  BASE_URL: "https://cassandra-cluster.distil.ai:8888",
};

let config;
if (process.env.REACT_APP_ENV === "production") {
  config = productionGlobalConstants;
} else if (process.env.REACT_APP_ENV === "staging") {
  config = stagingGlobalConstants;
} else {
  config = localDebuggingConstants;
}

export const globalConstants = {
  URL_INITIAL: "/internal-api/v0_0/",
  VERSION: "3.0.1",
  ...config,
};

export const paths = {
  authPath: "/auth-login",
  installPath: "/install",
  addTeamMembers: "/add-team-members",
  editTeamMembers: "/edit-team-members/:id",
  settingsPath: "/settings",
  analyticsPath: "/analytic-feeds",
  analyticSubscriberPath: "/analytics-subscribers",
  progressFriday: "/progress-friday",
  analyticsInfor: "/analytics-infor",
  chartForecast: "/chart-forecast",
  productThursday: "/product-thursday",
  customerSegmentation: "/customer-segmentation",
  customerWednesday: "/customer-wednesday",
  statErDay: "/stat-er-day",
  sunDayPath: "/sunday",
};
