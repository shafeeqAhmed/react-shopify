import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faInfo } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import "styles/pages/progressFriday.scss";
import "styles/pages/productThursday.scss";
import WordCloud from "./chart/WordCloud";

const ProductThursday = ({ day, date }) => {
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
                      Product Thursday
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
                        Yesterday we looked at your Segments and how they are
                        developing. Today we can cross-reference that with new
                        Customers this cohort and see if your actions this month
                        are driving higher LTV Customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body m-md-3 m-0 border-bottom-1">
                <div className="image">
                  <WordCloud />
                </div>
                <Row>
                  <Col xs={12} md={7} className="col-left">
                    <p className="text-title">This Week</p>
                    <div className="content-left">
                      <p className="fw-bold text-value"># {cardData?.data?.differentProductsSold}</p>
                      <p className="text-gray">Different Products sold</p>
                    </div>
                    <div className="d-flex">
                      <div className="top">
                        <p className="text-lable text-green">
                          {cardData?.data?.topClimber?.name}
                        </p>
                        <p className="text-small">Top Climber this week:</p>
                      </div>
                      <div>
                        <p className="text-lable text-red">{cardData?.data?.topFaller?.name}</p>
                        <p className="text-small">Top faller this week:</p>
                      </div>
                    </div>
                    <p>Movers and Shakers </p>
                    <Table borderless className="table-data">
                      <thead>
                        <tr>
                          <th></th>
                          <th></th>
                          <th>Change</th>
                          <th># Orders</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cardData?.data?.moversAndShakers && cardData?.data?.moversAndShakers.map((item, index) => (
                          <tr key={index}>
                            <td>{item.key}</td>
                            <td>{item.name}</td>
                            <td
                              className={`${item.value - item.prevValue > 0
                                  ? "text-green"
                                : item.value - item.prevValue < 0
                                  ? "text-red"
                                  : item.value - item.prevValue === 0
                                    ? ""
                                    : "text-blue"
                                }`}
                            >
                              {(item.value - item.prevValue).toFixed(0)}
                            </td>
                            <td>{item.orders}</td>
                            <td>£{item.value}</td>
                          </tr>
                        ))}
                        <tr>
                          <td></td>
                          <td>Other</td>
                          <td></td>
                          <td>700</td>
                          <td>£212,000</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className="fw-bold">Total</td>
                          <td></td>
                          <td className="fw-bold">3,000</td>
                          <td className="fw-bold">£812,000</td>
                        </tr>
                      </tbody>
                    </Table>
                    <div className="pt-50">
                      <p className="text-sub">Subscription Opportunities</p>
                      <p>
                        Products that are bought more than once in the last
                        three months by the same Customer.
                      </p>
                      <Table borderless className="table-data">
                        <thead>
                          <tr>
                            <th></th>
                            <th></th>
                            <th>Change</th>
                            <th># Orders</th>
                            <th>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cardData?.data?.subscriptionOpportunities && cardData?.data?.moversAndShakers.map((item, index) => (
                            <tr key={index}>
                              <td>{item.key}</td>
                              <td>{item.name}</td>
                              <td
                                className={`${item.value - item.prevValue > 0
                                    ? "text-green"
                                  : item.value - item.prevValue < 0
                                    ? "text-red"
                                    : item.value - item.prevValue === 0
                                      ? ""
                                      : "text-blue"
                                  }`}
                              >
                                {(item.value - item.prevValue).toFixed(0)}
                              </td>
                              <td>{item.orders}</td>
                              <td>£{item.value}</td>
                            </tr>
                          ))}
                          <tr>
                            <td></td>
                            <td>Other</td>
                            <td></td>
                            <td>?</td>
                            <td>£?</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td className="fw-bold">Total</td>
                            <td></td>
                            <td className="fw-bold">?</td>
                            <td className="fw-bold">£?</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                  <Col xs={12} md={5}>
                    <div className="mb-188">
                      <p className="text-title">Customer Intent Profile</p>
                      <p className="text-value">#{cardData?.data?.allCustomersCount}</p>
                      <p className="text-normal">
                        Customers with Intent Profiles. That’s <b>{cardData?.data?.indentCustomersPercent}</b> of the
                        Active Customer Segment
                      </p>

                      <p className="text-value">#{cardData?.data?.indentCustomerCount}</p>
                      <p className="text-normal">
                        Customer Unique Intent Profiles.
                      </p>

                      <p className="text-normal">Customers with this profile are likely to buy one or more of the following products:</p>
                      {cardData?.data?.customerIndentProfile && cardData?.data?.customerIndentProfile.map((item, index) => (
                        <div key={index}>
                          <div className="thursday-hr"></div>
                          <p className="text-child">Intent Profile #{index + 1}</p>
                          <p className="text-top">{item.customersCount}</p>
                          <p className="text-bottom">
                            Customers with this intent
                          </p>
                          <p className="text-top">£ {item.value}</p>
                          <p className="text-bottom">Value if activated</p>

                          <p className="text-bottom">
                            Customers with this profile are likely to buy one or
                            more of the following products
                          </p>
                          <div>
                            {item.productNames && item.productNames.map((i, index) => (
                              <p key={index} className="text-light">
                                {i}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
              </div>
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductThursday;


export const dataRight = [
  {
    top: "#4,500",
    middle: "£ 3,455",
    bottom: ["iPhone Max Pro Amazing", "iPad Max Pro Amazing 9", "Ear Buds"],
  },
  {
    top: "#4,50",
    middle: "£ 3,455",
    bottom: ["Smell of Cheese Colone", "Goat Feed", "Microsoft Windows Phone"],
  },
  {
    top: "#4,50",
    middle: "£ 3,455",
    bottom: [
      "Duck infused Seeded Bun",
      "Elephant Collar and Lead Set",
      "Cheese Air Scent",
    ],
  },
];
