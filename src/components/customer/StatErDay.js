import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import "styles/pages/customer/stat-er-day.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
const StatErDay = ({ day, date }) => {
  const faDolar = <FontAwesomeIcon icon={faDollarSign} />;
  const faIn = <FontAwesomeIcon icon={faInfo} />;
  return (
    <div className="card m-0 p-2 rounded shadow-sm analytic-card page-stat-erday">
      <div className="card-header border-bottom-1 pl-3 position-relative">
                <div className="row card-header-row">
                  <div className="col-1 d-flex card-col-icon align-items-center">
                    <div className="card-icon">{faDolar}</div>
                  </div>
                  <div className="col-11 card-title-col">
                    <div className="card-title fs-5 fw-bold">
                    Saturday, Stat-er-day!
                    </div>
                  </div>
          <div className="col-12 card-offset">
                    <p className="card-info small">
                      How to read information in <br></br>this card?
                      <span className="card-sm-icon m-2">{faIn}</span>
                    </p>
                    <p className="small text-muted mb-1 mb-md-2">
              {date}
                    </p>
                    <div className="text-wrap pr-3 w-75">
                      <p className="card-text">
                      Yesterday we looked at your Segments and how they are developing. Today we can cross-reference that with new Customers this cohort and see if your actions this month are driving higher LTV Customers.
                      </p>
                    </div>
                  </div>
                </div>
      </div>
      <Container className="px-4 py-3 section-container" fluid>
        <Row>
          <Col lg={4} sm={4}></Col>
          <Col lg={4} sm={4}>
            <Row className="responsive-mobile">
              <Col lg={4} sm={4}>
                <div>
                  <span>30 day change</span>
                </div>
              </Col>
              <Col lg={4} sm={4}>
                <div>
                  <span>Avg Customer Value</span>
                </div>
              </Col>
              <Col lg={4} sm={4}>
                <div>
                  <span>Number Customers</span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={4}>
            <Row className="responsive-mobile">
              <Col lg={4} sm={4}>
                <div>
                  <span>Segment Value Last 6 months</span>
                </div>
              </Col>
              <Col lg={4} sm={4}>
                <div>
                  <span>% of total sales Last 6 months</span>
                </div>
              </Col>
              <Col lg={4} sm={4}>
                <div>
                  <span>% of total sales Last Year</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="row2">
          <Col lg={4} sm={4} className="responsive-mobile">
            <Row>
              <div>
                <span>Active High Value Customers</span>
              </div>
            </Row>

            <Row>
              <div>
                <span>Active Avg Value Customers</span>
              </div>
            </Row>

            <Row>
              <div>
                <span>Active Low Value Customers</span>
              </div>
            </Row>

            <Row>
              <div>
                <span>Active Low Value Customers</span>
              </div>
            </Row>

            <Row>
              <div>
                <span>Active Loyal Customers</span>
              </div>
            </Row>

            <Row>
              <div>
                <span>New Customers</span>
              </div>
            </Row>

            <Row>
              <div>
                <span>Lost Customers</span>
              </div>
            </Row>

            <Row>
              <div>
                <span>At Risk Customers</span>
              </div>
            </Row>
          </Col>
          <Col lg={4} sm={4}>
            <Row>
              <Col lg={4} sm={4} xs={12}>
                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">30 day change</span>
                    <span className="title-column">
                      Active High Value Customers
                    </span>
                    <span>+34%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Avg Value Customers
                    </span>
                    <span>+34%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Low Value Customers
                    </span>
                    <span>+34%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Low Value Customers
                    </span>
                    <span>+34%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">Active Loyal Customers</span>
                    <span>+34%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">New Customers</span>
                    <span>+34%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">Lost Customers</span>
                    <span>+34%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">At Risk Customers</span>
                    <span>+34%</span>
                  </div>
                </Row>
              </Col>
              <Col lg={4} sm={4} xs={12}>
                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">Avg Customer Value</span>
                    <span className="title-column">
                      Active High Value Customers
                    </span>
                    <span>£2,856</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Avg Value Customers
                    </span>
                    <span>£856</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Low Value Customers
                    </span>
                    <span>£56</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Low Value Customers
                    </span>
                    <span>£56</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">Active Loyal Customers</span>
                    <span>£856</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">New Customers</span>
                    <span>£56</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">Lost Customers</span>
                    <span>£1,256</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">At Risk Customers</span>
                    <span>£1,256</span>
                  </div>
                </Row>
              </Col>
              <Col lg={4} sm={4} xs={12}>
                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">Number Customers</span>
                    <span className="title-column">
                      Active High Value Customers
                    </span>
                    <span>2,856</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Avg Value Customers
                    </span>
                    <span>856</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Low Value Customers
                    </span>
                    <span>56</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Low Value Customers
                    </span>
                    <span>56</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">Active Loyal Customers</span>
                    <span>856</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">New Customers</span>
                    <span>56</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">Lost Customers</span>
                    <span>1,256</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">At Risk Customers</span>
                    <span>1,256</span>
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={4} xs={12}>
            <Row>
              <Col lg={4} sm={4}>
                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">
                      Segment Value Last 6 months
                    </span>
                    <span className="title-column">
                      Active High Value Customers
                    </span>
                    <span>£282,565</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Avg Value Customers
                    </span>
                    <span>£180,560</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Low Value Customers
                    </span>
                    <span>£12,000</span>
                  </div>
                </Row>
                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Low Value Customers
                    </span>
                    <span>£12,000</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">Active Loyal Customers</span>
                    <span>£85,306</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">New Customers</span>
                    <span>£11,560</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">Lost Customers</span>
                    <span>£134,256</span>
                  </div>
                </Row>

                <Row className="content-number1">
                  <div className="respone-section">
                    <span className="title-column">At Risk Customers</span>
                    <span>£451,256</span>
                  </div>
                </Row>
              </Col>
              <Col lg={4} sm={4} xs={12}>
                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">
                      % of total sales Last 6 months
                    </span>
                    <span className="title-column">
                      Active High Value Customers
                    </span>
                    <span>70%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Avg Value Customers
                    </span>
                    <span>10%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Low Value Customers
                    </span>
                    <span>10%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Low Value Customers
                    </span>
                    <span>10%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">Active Loyal Customers</span>
                    <span>45%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">New Customers</span>
                    <span>34%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">Lost Customers</span>
                    <span>34%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">At Risk Customers</span>
                    <span>12%</span>
                  </div>
                </Row>
              </Col>
              <Col lg={4} sm={4} xs={12}>
                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">
                      % of total sales Last Year
                    </span>
                    <span className="title-column">
                      Active High Value Customers
                    </span>
                    <span>70%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Avg Value Customers
                    </span>
                    <span>10%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Low Value Customers
                    </span>
                    <span>10%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">
                      Active Low Value Customers
                    </span>
                    <span>10%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">Active Loyal Customers</span>
                    <span>45%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">New Customers</span>
                    <span>34%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">Lost Customers</span>
                    <span>34%</span>
                  </div>
                </Row>

                <Row className="content-percent1">
                  <div className="respone-section">
                    <span className="title-column">At Risk Customers</span>
                    <span>12%</span>
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="card-footer">
                <p className="mb-0">
                  <b>Tomorrow:</b> Product Thursday
                </p>
                <p className="small text-muted">
                  Delving into your Customer Segments, how they are changing and
                  any actions you can take to drive growth.
                </p>
      </div>
    </div>
  );
};

export default StatErDay;
