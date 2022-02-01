import React from "react";
import { Col, Row } from "react-bootstrap";

import "styles/pages/analytic-card-detail.scss";

import AnalyticChart from "components/analytics/analytic/AnalyticChart";
import BarChartVertical from "components/analytics/chart/BarChartVertical";
import LineChart from "components/analytics/chart/LineChart";

import createApp from "@shopify/app-bridge";
import { getSessionToken } from "@shopify/app-bridge-utils";
const app = createApp({
  apiKey: process.env.REACT_APP_SHOPIFY_APP_API_KEY,
  host: btoa("distil-dev.myshopify.com")
});
// const sessionToken = await getSessionToken(app);
getSessionToken(app).then(token => {
  console.log("Session Token", token);
})

const ChartForecast = () => {
  return (
    <>
      <div className="analytic-card-detail">
        <Row>
          <Col lg={7} xs={0}>
            <div className="">
              <div className="card-title fs-l fw-400">Last Week</div>
              <div className="fs-s text-gray mb-1 mb-md-2">
                Monday 1st December to Sunday 7th December 2021
              </div>
            </div>
            <div className="card-title mt-4">
              <div className="">
                <div className="normal text-gray fs-xm">Sales last week</div>
                <div className="card-title fs-xxxl fw-bold">£23,345</div>
              </div>
              <div className="card-title mt-3">
                <Row className="m-1">
                  <Col lg={2} xs={0}>
                    <div className="fs-m text-gray">Orders</div>
                    <div className="fs-xl fw-bold text-gray">123</div>
                  </Col>
                  <Col lg={7} xs={0}>
                    <div className="fs-m text-gray">Customers</div>
                    <div className="fs-xl fw-bold text-gray">1000</div>
                  </Col>
                </Row>
              </div>
              <div className="card-title mt-4">
                <div className="fs-xm fw-bold text-gray">
                  80% new Customers, 20% repeat.
                </div>
              </div>
              <div className="card-title mt-4">
                <div className="fs-xm fw-bold text-gray">
                  Sales forecast for last week was £23k, which was matched
                </div>
              </div>
            </div>
            <div className="card-title mt-5 ">
              <div className="">
                <div className="fs-xm text-gray">Average Order Value</div>
                <div className="fs-xl fw-bold text-gray">£245</div>
              </div>
              <div className="fs-xm fw-bold text-gray mt-2 ">
                <span className="normal text-gray">This is</span>
                <span className="p-1 text-green">greater</span>
                <span className="normal text-gray">
                  than your 12 month average, which is
                </span>
                <span className="text-wrap fw-bold card-text"> £233 </span>
              </div>
            </div>
          </Col>
          <Col lg={5} xs={0} className="mt-5 ">
            <div className="chart-wrap">
              <span className="chart_content normal text-gray">
                This week ranks
              </span>
              <span className="chart_content fs-6 fw-bold text-gray">
                {" "}
                8th{" "}
              </span>
              <span className="chart_content normal text-gray">
                out of the last 20 weeks
              </span>
              <div className="chart">
                <AnalyticChart />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between">
          <Col lg={5} xs={0} className="mt-5">
            <div className="fs-xm text-gray">Upcoming Weeks Forecast</div>
            <div className="fs-1 fw-bold text-gray"> £52k </div>
            <div className="fs-xm text-gray mt-3">Growth on last year</div>
            <div className="fs-3 fw-bold text-gray"> 3% </div>
            <div className="mt-4">
              <span className="fs-xm text-gray">
                Your sales this time last year were
              </span>
              <span className="fs-xl fw-bold text-gray">{" "}£45k{" "}</span>
              <span className="fs-xm text-gray">
                You have been recently trending
              </span>
              <span className="fs-xl fw-bold text-gray">{" "}3%{" "}</span>
              <span className="fs-xm text-gray">
                higher that this time last year.
              </span>
            </div>
            <div className="fs-xm text-gray mt-3">
              If you achive this forecast it would rank 5th out of the last 20
              weeks.
            </div>
            <div lg={6} xs={0} className="mb-1 mt-4">
              <BarChartVertical />
            </div>
          </Col>
          <Col lg={5} xs={0} className="mt-5 margin-left">
            <div className="fs-xm text-gray">End of Year Forecast</div>
            <div className="fs-1 fw-bold text-gray"> £660k </div>
            <div className="fs-xm fw-bold text-gray mt-3">End of year forecast,</div>
            <div className="fs-6 text-gray">
              <span className="text-green">Up</span>
              <span className="text-wrap fw-bold card-text"> £10k </span>
              <span className="fs-xm text-gray">
                from this time last week.
              </span>
            </div>
            <div className="mt-5">
              <div className="fs-xm text-gray">
                2021/2022 Q2: £165k (Current)
              </div>
              <div className="fs-xm text-gray">2021/2022 Q3: £175k</div>
              <div className="fs-xm text-gray">2021/2022 Q4: £195k</div>
              <div className="fs-xm text-gray">2022/2021 Q1: £115k</div>
            </div>
            <div lg={6} xs={0} className="mb-1 mt-5">
              <LineChart />
            </div>
          </Col>
        </Row>

        <Row>


        </Row>
        <Row className="mt-5 d-flex justify-content-center">
          <div className="fs-m fw-bold text-gray text-center ">
            Were you running any campaigns, promotions, attending events at this
            that might change have affected this forecast?
          </div>
        </Row>
      </div>
    </>
  );
};

export default ChartForecast;
