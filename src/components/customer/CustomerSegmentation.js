import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faInfo } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import LineChartTuesday from "components/customer/ChartCustomerSegment";

import "styles/pages/customer/segment.scss";
import { useSelector } from "react-redux";

function CustomerSegmentation({ day, date }) {
  const faDolar = <FontAwesomeIcon icon={faDollarSign} />;
  const faIn = <FontAwesomeIcon icon={faInfo} />;
  const cardData = useSelector((state) => state.cardData.cardData);

  return (
    <div className="page-customer-segment">
      <Container fluid className="container-content">
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
                      Customer Segmentation Tuesday
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
                        Yesterday we looked at your Segments and how they are
                        developing. Today we can cross-reference that with new
                        Customers this cohort and see if your actions this month
                        are driving higher LTV Customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="segment-chart">
                  <LineChartTuesday />
                </div>
                <div className="segment-body">
                  <Row>
                    <Col lg={3} xs={0} />
                    <Col lg={3} xs={0}>
                      <div className="segment-title mb-2">Active Customers</div>
                      <div className="segment-biggest mb-2">
                        {cardData.data?.activeCustomers}
                      </div>
                      <div className="segment-title mb-2">
                        Value in last 12 months
                      </div>
                      <div className="segment-price-big mb-4">
                        £{cardData.data?.activeCustomersLastYearSpend}
                      </div>
                    </Col>
                    <Col lg={3} xs={0}>
                      <div className="segment-title mb-2">
                        At Risk Customers
                      </div>
                      <div className="segment-biggest segment-orange mb-2">
                        {cardData.data?.atRiskCustomers}
                      </div>
                      <div className="segment-title mb-2">
                        Value in last 12 months
                      </div>
                      <div className="segment-price-big segment-orange mb-4">
                        £{cardData.data?.atRiskCustomersLastYearSpend}
                      </div>
                    </Col>
                    <Col lg={3} xs={0} />
                  </Row>
                  <Row>
                    <Col lg={3} xs={0} />
                    <Col>
                      <div className="segment-currently mb-4">
                        How do your Currently Active Customers Segment?
                      </div>
                    </Col>
                    <Col lg={3} xs={0} />
                  </Row>
                  <div className="segment-desktop">
                    <Row className="mb-4">
                      <Col lg={3} md={3} xs={0} />
                      <Col lg={3} md={3} xs={4}>
                        <div className="segment-title">
                          Active High Value Customers
                        </div>
                        <div className="segment-big mb-4">
                          #{" "}
                          {cardData.data?.highValueSegmentData?.activeCustomers}
                        </div>
                        <div className="segment-price-normal">
                          £{cardData.data?.highValueSegmentData?.averageSpend}
                        </div>
                        <div className="segment-title mb-4">Avg LTV</div>
                        <div className="segment-normal">
                          {cardData.data?.highValueSegmentData?.activeCustomers}
                          %
                        </div>
                        <div className="segment-title mb-4">
                          of Active Customers
                        </div>
                        <div className="segment-normal">
                          {
                            cardData?.data?.highValueSegmentData
                              ?.oneOrderCustomers
                          }
                          %
                        </div>
                        <div className="segment-title mb-4">
                          of last 12-months Sales
                        </div>
                        <div className="segment-title-bold">
                          80% new, 20% repeat.
                        </div>
                      </Col>
                      <Col lg={3} md={3} xs={4}>
                        <div className="segment-title">
                          Active Avg Value Customers
                        </div>
                        <div className="segment-big mb-4">
                          #{" "}
                          {
                            cardData.data?.averageValueSegmentData
                              ?.activeCustomers
                          }
                        </div>
                        <div className="segment-price-normal">
                          £
                          {cardData.data?.averageValueSegmentData?.averageSpend}
                        </div>
                        <div className="segment-title mb-4">Avg LTV</div>
                        <div className="segment-normal">
                          {
                            cardData.data?.averageValueSegmentData
                              ?.activeCustomers
                          }
                          %
                        </div>
                        <div className="segment-title mb-4">
                          of Active Customers
                        </div>
                        <div className="segment-normal">
                          {
                            cardData.data?.averageValueSegmentData
                              ?.oneOrderCustomers
                          }
                          %
                        </div>
                        <div className="segment-title mb-4">
                          of last 12-months Sales
                        </div>
                        <div className="segment-title-bold">
                          80% new, 20% repeat.
                        </div>
                      </Col>
                      <Col lg={3} md={3} xs={4}>
                        <div className="segment-title">
                          Active Low Value Customers
                        </div>
                        <div className="segment-big mb-4">
                          #{" "}
                          {cardData.data?.lowValueSegmentData?.activeCustomers}
                        </div>
                        <div className="segment-price-normal">
                          £{cardData.data?.lowValueSegmentData?.averageSpend}
                        </div>
                        <div className="segment-title mb-4">Avg LTV</div>
                        <div className="segment-normal">
                          {cardData.data?.lowValueSegmentData?.activeCustomers}%
                        </div>
                        <div className="segment-title mb-4">
                          of Active Customers
                        </div>
                        <div className="segment-normal">
                          {
                            cardData.data?.lowValueSegmentData
                              ?.oneOrderCustomers
                          }
                          %
                        </div>
                        <div className="segment-title mb-4">
                          of last 12-months Sales
                        </div>
                        <div className="segment-title-bold">
                          80% new, 20% repeat.
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={3} md={3} xs={0}>
                        <div className="segment-item mb-2">
                          Number Purchases
                        </div>
                        <div className="segment-item mb-2">
                          Average Order Value
                        </div>
                        <div className="segment-item mb-2">Visit Frequency</div>

                        <div className="segment-item mb-2">
                          Purchase Frequency
                        </div>
                        <div className="segment-item mb-2">
                          Top Marketing Channel
                        </div>
                      </Col>
                      <Col lg={3} md={3} xs={0}>
                        <div className="segment-small mb-2">
                          {
                            cardData.data?.highValueSegmentData
                              ?.totalOrderNumber
                          }
                        </div>
                        <div className="segment-small mb-2">
                          £
                          {
                            cardData.data?.highValueSegmentData
                              ?.averageOrderValue
                          }
                        </div>
                        <div className="segment-small mb-2">
                          {
                            cardData.data?.highValueSegmentData
                              ?.averageVisitFrequency
                          }
                        </div>
                        <div className="segment-small mb-2">
                          {
                            cardData.data?.highValueSegmentData
                              ?.averagePurchaseFrequency
                          }
                        </div>
                        <div className="segment-small mb-2">
                          {
                            cardData.data?.highValueSegmentData
                              ?.topMarketingChannel
                          }
                        </div>
                      </Col>

                      <Col lg={3} md={3} xs={0}>
                        <div className="segment-small mb-2">
                          {
                            cardData.data?.averageValueSegmentData
                              ?.totalOrderNumber
                          }
                        </div>
                        <div className="segment-small mb-2">
                          £
                          {
                            cardData.data?.averageValueSegmentData
                              ?.averageOrderValue
                          }
                        </div>
                        <div className="segment-small mb-2">
                          {
                            cardData.data?.averageValueSegmentData
                              ?.averageVisitFrequency
                          }
                        </div>
                        <div className="segment-small mb-2">
                          {
                            cardData.data?.averageValueSegmentData
                              ?.averagePurchaseFrequency
                          }
                        </div>
                        <div className="segment-small mb-2">
                          {
                            cardData.data?.averageValueSegmentData
                              ?.topMarketingChannel
                          }
                        </div>
                      </Col>
                      <Col lg={3} md={3} xs={0}>
                        <div className="segment-small mb-2">
                          {cardData.data?.lowValueSegmentData?.totalOrderNumber}
                        </div>
                        <div className="segment-small mb-2">
                          £
                          {
                            cardData.data?.lowValueSegmentData
                              ?.averageOrderValue
                          }
                        </div>
                        <div className="segment-small mb-2">
                          {
                            cardData.data?.lowValueSegmentData
                              ?.averageVisitFrequency
                          }
                        </div>
                        <div className="segment-small mb-2">
                          {
                            cardData.data?.lowValueSegmentData
                              ?.averagePurchaseFrequency
                          }
                        </div>
                        <div className="segment-small mb-2">
                          {
                            cardData.data?.lowValueSegmentData
                              ?.topMarketingChannel
                          }
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Col md={3} xs={0}>
                        <div className="segment-item mb-2">
                          Leading Purchase
                        </div>
                        <div className="segment-small segment-small-thin segment-end">
                          The most popular leading (first) product bought by
                          these two groups is:
                        </div>
                      </Col>
                      <Col md={3} xs={0}>
                        <div className="segment-item mb-2">
                          {
                            cardData.data?.highValueSegmentData?.leadingPurchase
                              .name
                          }
                        </div>
                        <div className="segment-small segment-small-thin segment-end">
                          {
                            cardData.data?.highValueSegmentData?.leadingPurchase
                              .value
                          }
                          % bought this product first
                        </div>
                      </Col>
                      <Col md={3} xs={0}>
                        <div className="segment-item mb-2">
                          {
                            cardData.data?.averageValueSegmentData
                              ?.leadingPurchase?.name
                          }
                        </div>
                        <div className="segment-small segment-small-thin segment-end">
                          {
                            cardData.data?.averageValueSegmentData
                              ?.leadingPurchase?.value
                          }
                          % bought this product first
                        </div>
                      </Col>
                      <Col md={3} xs={0}>
                        <div className="segment-item mb-2">
                          {
                            cardData.data?.lowValueSegmentData?.leadingPurchase
                              .name
                          }
                        </div>
                        <div className="segment-small segment-small-thin segment-end">
                          {
                            cardData.data?.lowValueSegmentData?.leadingPurchase
                              .value
                          }
                          % bought this product first
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={3} xs={0}>
                        <div className="segment-item mb-2">Top 5 Products</div>
                        <div className="segment-small segment-small-thin">
                          Over the past 3-months the most popular product in the
                          two groups are:
                        </div>
                      </Col>
                      <Col md={3} xs={0}>
                        {cardData.data?.highValueSegmentData?.mostPopularProducts?.map(
                          (item, index) => (
                            <div key={index}>
                              <div className="segment-small mb-1">
                                {item.name}
                              </div>
                              <div className="segment-small segment-small-thin mb-2">
                                ({item.value}% purchased this)
                              </div>
                            </div>
                          )
                        )}
                      </Col>
                      <Col md={3} xs={0}>
                        {cardData.data?.highValueSegmentData?.mostPopularProducts?.map(
                          (item, index) => (
                            <div key={index}>
                              <div className="segment-small mb-1">
                                {item.name}
                              </div>
                              <div className="segment-small segment-small-thin mb-2">
                                ({item.value}% purchased this)
                              </div>
                            </div>
                          )
                        )}
                      </Col>
                      <Col md={3} xs={0}>
                        {cardData.data?.lowValueSegmentData?.mostPopularProducts?.map(
                          (item, index) => (
                            <div key={index}>
                              <div className="segment-small mb-1">
                                {item.name}
                              </div>
                              <div className="segment-small segment-small-thin mb-2">
                                ({item.value}% purchased this)
                              </div>
                            </div>
                          )
                        )}
                      </Col>
                    </Row>
                  </div>
                </div>
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
    </div>
  );
}

export default CustomerSegmentation;
