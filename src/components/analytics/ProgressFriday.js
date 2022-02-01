import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faDollarSign,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";

import "styles/pages/progressFriday.scss";

import BarChartProgressFriday from "components/analytics/chart/BarChartProgressFriday";
import LineChart from "components/analytics/chart/LineChart";
import { useSelector } from "react-redux";

const ProgressFriday = ({ day, date }) => {
  const faRight = <FontAwesomeIcon icon={faAngleDoubleRight} />;
  const faDolar = <FontAwesomeIcon icon={faDollarSign} />;
  const faIn = <FontAwesomeIcon icon={faInfo} />;

  const cardData = useSelector((state) => state.cardData.cardData);
  return (
    <>
      <Container className="progress-friday" fluid>
        <Row>
          <Col>
            <div className="card m-0 p-2 rounded shadow-sm analytic-card">
              <div className="card-header border-bottom-1 pl-3 position-relative">
                <div className="row card-header-row">
                  <div className="col-1 d-flex card-col-icon align-items-center">
                    <div className="card-icon">{faDolar}</div>
                  </div>
                  <div className="col-11 card-title-col">
                    <div className="card-title fs-5 fw-bold">
                      Progress Friday
                    </div>
                  </div>
                  <div className="col-1 d-flex card-col-icon align-items-center"></div>
                  <div className="col-11 card-offset">
                    <p className="card-info small">
                      How to read information in <br></br>this card?
                      <span className="card-sm-icon m-2">{faIn}</span>
                    </p>
                    <p className="small text-muted mb-1 mb-md-2">
                      {date}
                    </p>
                    <div className="text-wrap pr-3 w-75">
                      <p className="card-text">
                        Friday! Hurray. Lets see how this week is tracking
                        against our forecast and look forward to next week
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body m-md-3 m-0 border-bottom-1">
                <div>
                  <Row>
                    <Col xs={12} md={6}>
                      <div>
                        <p className="text-title">Sales so far this week</p>
                        <p className="text-value">
                          £<b>{cardData?.data?.salesLastYearWeek}k</b>
                        </p>
                        <p className="small text-title">
                          <span className="text-green fw-bold">+ ?% </span>
                          over this week last year
                        </p>
                      </div>
                      <div className="chart-model">
                        <BarChartProgressFriday />
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div className="d-flex forecast-vl">
                        <div>
                          <p className="text-title">Start of Week Forecast</p>
                          <p className="text-gray text-value">
                            £{cardData?.data?.startWeekForecast}k
                          </p>
                        </div>
                        <span className="fa-right">{faRight}</span>
                        <div>
                          <p className="text-title">
                            Updated end of week forecast
                          </p>
                          <p className="text-green fw-bold text-value">
                            £{cardData?.data?.endWeekForecast}k
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-title fs-13">
                          <b>
                            {cardData?.data?.endWeekForecast -
                              cardData?.data?.startWeekForecast >
                            0 ? (
                              <span className="text-green fw-bold">Up </span>
                            ) : (
                              <span className="text-red fw-bold">Down </span>
                            )}
                            £
                            {Math.abs(
                              Math.round(
                                (cardData?.data?.endWeekForecast -
                                  cardData?.data?.startWeekForecast) *
                                  100
                              ) / 100
                            )}
                            k{" "}
                          </b>
                          over the start of the week forecast.
                        </p>
                        <p className="text-title fs-13">
                          If you achive this forecast it would rank 4th out of
                          the last 20 weeks.
                        </p>
                      </div>
                      <LineChart />
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="card-footer">
                <p className="mb-0">
                  <b>Tomorrow:</b>
                  Saturday, Stat-a-day!
                </p>
                <p className="small text-muted">xxxx</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProgressFriday;
