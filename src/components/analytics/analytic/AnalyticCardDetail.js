import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import AnalyticChart from "components/analytics/analytic/AnalyticChart";
import "styles/pages/analytic-card-detail.scss";
import moment from "moment";
import BarChartVertical from "components/analytics/chart/BarChartVertical";
import LineChart from "components/analytics/chart/LineChart";
const AnalyticCardDetail = () => {
  const [startLastWeekDate, setStartLastWeekDate] = useState("");
  const [endLastWeekDate, setEndLastWeekDate] = useState("");
  // eslint-disable-next-line
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));
  const [salesLastWeek, setSalesLastWeek] = useState("");
  const [lastWeekOrders, setLastWeekOrders] = useState("");
  const [lastWeekCustomers, setLastWeekCustomers] = useState("");
  // eslint-disable-next-line
  const [lastWeekNewCustomers, setLastWeekNewCustomers] = useState("");
  const [lastWeekNewCustomersPercent, setLastWeekNewCustomersPercent] =
    useState("");
  const [
    lastWeekReturningCustomersPercent,
    setLastWeekReturningCustomersPercent,
  ] = useState("");
  const [lastWeekAverageOrderValue, setLastWeekAverageOrderValue] =
    useState("");
  const [lastYearAverageOrderValue, setLastYearAverageOrderValue] =
    useState("");
  const [last20weeksRanking, setLast20weeksRanking] = useState("");
  const [weekData, setWeekData] = useState("");
  const [quarter0, setQuarter0] = useState("");
  const [quarter1, setQuarter1] = useState("");
  const [quarter2, setQuarter2] = useState("");
  const [quarter3, setQuarter3] = useState("");

  const cardData = useSelector((state) => state.cardData.cardData);

  useEffect(() => {
    setStartLastWeekDate(
      moment(cardData?.data?.lastWeekDate).format("dddd Do MMMM")
    );
    setEndLastWeekDate(
      moment(cardData?.data?.lastWeekDate).add(6, "days").format("dddd Do MMMM")
    );
    setSalesLastWeek(cardData?.data?.salesLastWeek);
    setLastWeekOrders(cardData?.data?.lastWeekOrders);
    setLastWeekCustomers(cardData?.data?.lastWeekCustomers);
    setLastWeekNewCustomers(cardData?.data?.lastWeekNewCustomers);
    setLastWeekNewCustomersPercent(cardData?.data?.lastWeekNewCustomersPercent);
    setLastWeekReturningCustomersPercent(
      cardData?.data?.lastWeekReturningCustomersPercent
    );
    setLastWeekAverageOrderValue(cardData?.data?.lastWeekAverageOrderValue);
    setLastYearAverageOrderValue(cardData?.data?.lastYearAverageOrderValue);
    setLast20weeksRanking(cardData?.data?.last20weeksRanking);
    setWeekData(cardData?.data?.weekData);
    setQuarter0(cardData?.data?.quarter0);
    setQuarter1(cardData?.data?.quarter1);
    setQuarter2(cardData?.data?.quarter2);
    setQuarter3(cardData?.data?.quarter3);
  }, [cardData]);
  return (
    <>
      <div className="analytic-card-detail m-md-5">
        <Row>
          <Col lg={7} xs={0}>
            <div className="">
              <div className="card-title fs-l fw-normal">Last Week</div>
              <div className="fs-s text-gray mb-1 mb-md-2">
                {startLastWeekDate} to {endLastWeekDate}
              </div>
            </div>
            <div className="card-title mt-4">
              <div className="">
                <span className="card-title fs-xl fw-bold">
                  £{salesLastWeek}
                </span>
                <span className="text-wrap fs-xm w-75 card-text">
                  {" "}
                  sales last week{" "}
                </span>
              </div>
              <div className="card-title fs-xm mt-2">
                <span className="text-wrap fw-bold card-text">
                  # {lastWeekOrders}
                </span>

                <span className="normal text-gray p-1">total orders</span>
              </div>
              <div className="fs-xm">
                <span className="text-wrap fw-bold card-text">
                  # {lastWeekCustomers}
                </span>

                <span className="normal text-gray"> Customers </span>
                <span className="text-wrap fw-bold card-text">
                  {lastWeekNewCustomersPercent}% new,{" "}
                  {lastWeekReturningCustomersPercent}% repeat.
                </span>
              </div>
            </div>
            <div className="card-title mt-5">
              <div className="">
                <span className="card-title fs-xl fw-bold">
                  £{lastWeekAverageOrderValue}.
                </span>
                <span className=" w-75 fs-l card-text">
                  {" "}
                  Average Order Value{" "}
                </span>
              </div>
              <div className="card-title fs-m mt-1">
                <span className="normal text-gray">This is</span>
                <span className="p-1 text-green">greater</span>
                <span className="normal text-gray">
                  than your 12 month average, which is
                </span>
                <span className="text-wrap fw-bold card-text">
                  {" "}
                  £{lastYearAverageOrderValue}{" "}
                </span>
              </div>
            </div>
            <div className="card-title mt-5">
              <div className="">
                <span className="fs-3 fw-bold card-text"># 45</span>
                <span className="w-75 fs-l card-text">
                  {" "}
                  different Products were sold.{" "}
                </span>
              </div>
              <div className="card-title mt-1">
                <span className="normal fs-m text-gray">
                  The top performing product was
                </span>
                <span className="text-wrap fw-bold card-text">
                  {" "}
                  Goat Feed.{" "}
                </span>
              </div>
              <div className="">
                <span className="normal fs-m text-gray">
                  This has been the top performing Product
                </span>
                <span className="fw-bold fs-m p-1">12</span>
                <span className="normal fs-m text-gray">
                  out of the last 50 weeks.
                </span>
              </div>
            </div>
          </Col>
          <Col lg={5} xs={0} className="mt-5">
            <div className="chart-wrap">
              <div className="chart_content normal text-gray fs-m mb-4">
                This week ranks {last20weeksRanking} out of the last 20 weeks.
                Better than average.
              </div>
              <div className="chart">
                <AnalyticChart />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between">
          <Col lg={5} xs={0} className="mt-5">
            <div className="fs-xm text-gray">Upcoming Weeks Forecast</div>
            <div className="fs-1 fw-bold text-gray">
              {" "}
              £{weekData?.weekForecast}k{" "}
            </div>
            <div className="fs-xm text-gray mt-3">Growth on last year</div>
            <div className="fs-3 fw-bold text-gray"> ?% </div>
            <div className="mt-4">
              <span className="fs-xm text-gray">
                Your sales this time last year were
              </span>
              <span className="fs-xl fw-bold text-gray"> £? </span>
              <span className="fs-xm text-gray">
                You have been recently trending
              </span>
              <span className="fs-xl fw-bold text-gray"> ?% </span>
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
            <div className="fs-1 fw-bold text-gray"> £? </div>
            <div className="fs-xm fw-bold text-gray mt-3">
              End of year forecast,
            </div>
            <div className="fs-6 text-gray">
              <span className="text-green">Up</span>
              <span className="text-wrap fw-bold card-text"> £? </span>
              <span className="fs-xm text-gray">from this time last week.</span>
            </div>
            <div className="mt-5">
              <div className="fs-xm text-gray">
                {quarter3?.name} : £{quarter3?.forecastValue}k
              </div>
              <div className="fs-xm text-gray">
                {quarter2?.name} : £{quarter2?.forecastValue}k
              </div>
              <div className="fs-xm text-gray">
                {quarter1?.name} : £{quarter1?.forecastValue}k
              </div>
              <div className="fs-xm text-gray">
                {quarter0?.name} : £{quarter0?.forecastValue}k (Current)
              </div>
            </div>
            <div lg={6} xs={0} className="mb-1 mt-5">
              <LineChart />
            </div>
          </Col>
        </Row>

        <Row></Row>
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

export default AnalyticCardDetail;
