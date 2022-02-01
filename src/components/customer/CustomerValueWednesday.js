import React from "react";
import { useSelector } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faInfo } from "@fortawesome/free-solid-svg-icons";
import straight from "img/icon/straight-triangle.svg";
import triangle from "img/icon/triangle.svg";
import "styles/pages/customer-value-wednesday.scss";

const CustomerValueWednesday = ({ day, date }) => {
  const faDolar = <FontAwesomeIcon icon={faDollarSign} />;
  const faIn = <FontAwesomeIcon icon={faInfo} />;
  const cardData = useSelector((state) => state.cardData.cardData);

  const titleColumn = (
    <Row className="section-content">
      <Col lg={3} sm={3} xs={0} className="content-col1">
        <div className="content-row-three respone-mobile">
          <span>Avg. # Purchases</span>
          <span>Avg. Order Value</span>
          <span>Avg. Visit Frequency</span>
          <span>Avg. Sales Frequency</span>
          <span>Top Marketing Channel</span>
        </div>
      </Col>
      <Col lg={3} sm={3} xs={12} className="section-current-cohort">
        <div className="content-row-three">
          <span>{cardData?.data?.currentCohortData?.purchases}</span>
          <span>£{cardData?.data?.currentCohortData?.purchasesValue}</span>
          <span>
            {cardData?.data?.currentCohortData?.averageVisitFrequency}
          </span>
          <span>{cardData?.data?.currentCohortData?.averageSalesFrequency}</span>
          <span>{cardData?.data?.currentCohortData?.topMarketingChannel}</span>
        </div>
      </Col>
      <Col lg={3} sm={3} xs={12}>
        <div className="content-row-three">
          <span>{cardData?.data?.secondLastCohortData?.purchases}</span>
          <span>£{cardData?.data?.secondLastCohortData?.purchasesValue}</span>
          <span>
            {cardData?.data?.secondLastCohortData?.averageVisitFrequency}
          </span>
          <span>{cardData?.data?.secondLastCohortData?.averageSalesFrequency}</span>
          <span>
            {cardData?.data?.secondLastCohortData?.topMarketingChannel}
          </span>
        </div>
      </Col>
      <Col lg={3} sm={3} xs={12}>
        <div className="content-row-three">
          <span>{cardData?.data?.lastCohortData?.purchases}</span>
          <span>£{cardData?.data?.lastCohortData?.purchasesValue}</span>
          <span>{cardData?.data?.lastCohortData?.averageVisitFrequency}</span>
          <span>{cardData?.data?.lastCohortData?.averageSalesFrequency}</span>
          <span>{cardData?.data?.lastCohortData?.topMarketingChannel}</span>
        </div>
      </Col>
    </Row>
  );
  return (
    <div className="card m-0 p-2 rounded shadow-sm analytic-card page-customer-wednesday">
      <div className="card-header border-bottom-1 pl-3 position-relative">
        <div className="row card-header-row">
          <div className="col-1 d-flex card-col-icon align-items-center">
            <div className="card-icon">{faDolar}</div>
          </div>
          <div className="col-11 card-title-col fw-bold">
            <div className="card-title ">Catch-up Wednesday</div>
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
                Let's start the week right. Review what happened over the
                weekend and last week, track that against your usual business
                performance to see how you're doing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="title-page">
        <span>
          What is this months Cohort looking like? How likely are they to
          develop into our Best Customers Segment?
        </span>
      </div>
      <Container className="px-4 py-3" fluid>
        <Row className="section-content">
          <Col lg={3} sm={3} xs={12} />
          <Col lg={3} sm={3} xs={12} className="section-current-cohort">
            <div className="content-row-1">
              <span>Current Cohort</span>
              <div>
                <span className="percent-1">
                  {
                    cardData?.data?.currentCohortData
                      ?.percentageMatchToBestCustomers
                  }
                  %
                </span>
                <img
                  src={
                    cardData?.data?.currentCohortData
                      ?.percentageMatchToBestCustomers -
                      cardData?.data?.currentCohortData
                        ?.percentageMatchToBestCustomersLastMonth >
                      0
                      ? straight
                      : triangle
                  }
                  alt=""
                />
                <span className="percent-2">
                  {" "}
                  {
                    cardData?.data?.currentCohortData
                      ?.percentageMatchToBestCustomersLastMonthDelta
                  }
                  %
                </span>
              </div>
              <span>Match to Best Customers</span>
            </div>
            <div className="content-row-2">
              <p className="row1">£{cardData?.data?.currentCohortData
                ?.ltvvalue}</p>
              <p>name
                LTV this Cohort after<span> {cardData?.data?.currentCohortData?.ltvvalueAfterXDays} day(s)</span>
              </p>
              <p className="row2">
                <span>
                  # {cardData?.data?.currentCohortData?.activeCustomers}
                </span>{" "}
                Customers
              </p>
              <p>
                <span>
                  {cardData?.data?.currentCohortData?.activeCustomersPercentage}
                  %
                </span>{" "}
                of Active Customers
              </p>
              <span className="row2">{cardData?.data?.currentCohortData
                ?.oneOrderCustomersPercentage}% new, {cardData?.data?.currentCohortData
                  ?.multipleOrderCustomersPercentage}% repeat.</span>            </div>
            <div className="respone-section">
              <span>Avg. # Purchases</span>
              <span>{cardData?.data?.currentCohortData?.purchases}</span>
              <span>Avg. Order Value</span>
              <span>£{cardData?.data?.currentCohortData?.purchasesValue}</span>
              <span>Avg. Visit Frequency</span>
              <span>
                {cardData?.data?.currentCohortData?.averageVisitFrequency}
              </span>
              <span>Avg. Sales Frequency</span>
              <span>{cardData?.data?.currentCohortData?.averageSalesFrequency}</span>
              <span>Top Marketing Channel</span>
              <span>
                {cardData?.data?.currentCohortData?.topMarketingChannel}
              </span>
            </div>
            <div className="respone-section">
              <span>Leading Purchase</span>
            </div>
            <div className="content-row-five col5 respone-section">
              The most popular leading (first) product bought by these two
              groups is:
            </div>
            <div className="content-row-four respone-row-four respone-section">
              <span>
                {cardData?.data?.currentCohortData?.leadingPurchase?.name}
              </span>
            </div>
            <div className="content-row-five col5 respone-section">
              {cardData?.data?.currentCohortData?.leadingPurchase?.value}% bought this product first
            </div>
            <div className="content-row-six respone-section">
              <span>Top 5 Products</span>
              <p>
                Over the past 3-months the most popular product in the two
                groups are:
              </p>
              {cardData?.data?.currentCohortData?.mostPopularProducts.map(
                (item, index) => (
                  <div className="d-flex flex-column" key={index}>
                    <span>{item.name}</span>
                    <p>({item.value}% purchased this)</p>
                  </div>
                )
              )}
            </div>
          </Col>
          <Col lg={3} sm={3} xs={12}>
            <div className="content-row-1">
              <span>November 21 Cohort</span>
              <div>
                <span className="percent-1">
                  {
                    cardData?.data?.secondLastCohortData
                      ?.percentageMatchToBestCustomers
                  }
                  %
                </span>
                <img
                  src={
                    cardData?.data?.secondLastCohortData
                      ?.percentageMatchToBestCustomers -
                      cardData?.data?.secondLastCohortData
                        ?.percentageMatchToBestCustomersLastMonth >
                      0
                      ? straight
                      : triangle
                  }
                  alt=""
                />
                <span className="percent-2">
                  {
                    cardData?.data?.secondLastCohortData
                      ?.percentageMatchToBestCustomersLastMonthDelta
                  }
                  %
                </span>
              </div>
              <span>Match to Best Customers</span>
            </div>
            <div className="content-row-2">
              <p className="row1">£{cardData?.data?.secondLastCohortData
                ?.ltvvalue}</p>
              <p>
                LTV this Cohort after<span> {cardData?.data?.secondLastCohortData?.ltvvalueAfterXDays} day(s)</span>
              </p>
              <p className="row2">
                <span>
                  # {cardData?.data?.secondLastCohortData?.activeCustomers}
                </span>{" "}
                Customers
              </p>
              <p>
                <span>
                  {
                    cardData?.data?.secondLastCohortData
                      ?.activeCustomersPercentage
                  }
                  %
                </span>{" "}
                of Active Customers
              </p>
              <span className="row2">{cardData?.data?.secondLastCohortData
                ?.oneOrderCustomersPercentage}% new, {cardData?.data?.secondLastCohortData
                  ?.multipleOrderCustomersPercentage}% repeat.</span>
            </div>
            <div className="content-row-three respone-section">
              <span>Avg. # Purchases</span>
              <span>{cardData?.data?.secondLastCohortData?.purchases}</span>
              <span>Avg. Order Value</span>
              <span>
                £{cardData?.data?.secondLastCohortData?.purchasesValue}
              </span>
              <span>Avg. Visit Frequency</span>
              <span>
                {cardData?.data?.secondLastCohortData?.averageVisitFrequency}
              </span>
              <span>Avg. Sales Frequency</span>
              <span>{cardData?.data?.secondLastCohortData?.averageSalesFrequency}</span>
              <span>Top Marketing Channel</span>
              <span>
                {cardData?.data?.secondLastCohortData?.topMarketingChannel}
              </span>
            </div>
            <div className="respone-section">
              <span>Leading Purchase</span>
            </div>
            <div className="content-row-five col5 respone-section">
              The most popular leading (first) product bought by these two
              groups is:
            </div>
            <div className="content-row-four respone-row-four respone-section">
              <span>
                {cardData?.data?.secondLastCohortData?.leadingPurchase?.name}
              </span>
            </div>
            <div className="content-row-five col5 respone-section">
              {cardData?.data?.secondLastCohortData?.leadingPurchase?.value}% bought this product first
            </div>
            <div className="content-row-six respone-section">
              <span>Top 5 Products</span>
              <p>
                Over the past 3-months the most popular product in the two
                groups are:
              </p>
              {cardData?.data?.secondLastCohortData?.mostPopularProducts.map(
                (item, index) => (
                  <div className="d-flex flex-column" key={index}>
                    <span>{item.name}</span>
                    <p>({item.value}% purchased this)</p>
                  </div>
                )
              )}
            </div>
          </Col>
          <Col lg={3} sm={3} xs={12}>
            <div className="content-row-1">
              <span>October 21 Cohort</span>
              <div>
                <span className="percent-1">
                  {
                    cardData?.data?.lastCohortData
                      ?.percentageMatchToBestCustomers
                  }
                  %
                </span>
                <img
                  src={
                    cardData?.data?.lastCohortData
                      ?.percentageMatchToBestCustomers -
                      cardData?.data?.lastCohortData
                        ?.percentageMatchToBestCustomersLastMonth >
                      0
                      ? straight
                      : triangle
                  }
                  alt=""
                />
                <span className="percent-2">
                  {" "}
                  {
                    cardData?.data?.lastCohortData
                      ?.percentageMatchToBestCustomersLastMonthDelta
                  }
                  %
                </span>
              </div>
              <span>Match to Best Customers</span>
            </div>
            <div className="content-row-2">
              <p className="row1">£{cardData?.data?.lastCohortData
                ?.ltvvalue}</p>
              <p>
                LTV this Cohort after<span> {cardData?.data?.lastCohortData?.ltvvalueAfterXDays} day(s)</span>
              </p>
              <p className="row2">
                <span># {cardData?.data?.lastCohortData?.activeCustomers}</span>{" "}
                Customers
              </p>
              <p>
                <span>
                  {cardData?.data?.lastCohortData?.activeCustomersPercentage}%
                </span>{" "}
                of Active Customers
              </p>
              <span className="row2">{cardData?.data?.lastCohortData
                ?.oneOrderCustomersPercentage}% new, {cardData?.data?.lastCohortData
                  ?.multipleOrderCustomersPercentage}% repeat.</span>
            </div>
            <div className="content-row-three respone-section">
              <span>{cardData?.data?.lastCohortData?.purchases}</span>
              <span>Avg. Order Value</span>
              <span>£{cardData?.data?.lastCohortData?.purchasesValue}</span>
              <span>Avg. Visit Frequency</span>
              <span>
                {cardData?.data?.lastCohortData?.averageVisitFrequency}
              </span>
              <span>Avg. Sales Frequency</span>
              <span>{cardData?.data?.lastCohortData?.averageSalesFrequency}</span>
              <span>Top Marketing Channel</span>
              <span>{cardData?.data?.lastCohortData?.topMarketingChannel}</span>
            </div>
            <div className="respone-section">
              <span>Leading Purchase</span>
            </div>
            <div className="content-row-five col5 respone-section">
              The most popular leading (first) product bought by these two
              groups is:
            </div>
            <div className="content-row-four respone-row-four respone-section">
              <span>
                {cardData?.data?.secondLastCohortData?.leadingPurchase?.name}
              </span>
            </div>
            <div className="content-row-five col5 respone-section">
              {cardData?.data?.secondLastCohortData?.leadingPurchase?.value}% bought this product first
            </div>
            <div className="content-row-six respone-section">
              <span>Top 5 Products</span>
              <p>
                Over the past 3-months the most popular product in the two
                groups are:
              </p>
              {cardData?.data?.secondLastCohortData?.mostPopularProducts.map(
                (item, index) => (
                  <div className="d-flex flex-column" key={index}>
                    <span>{item.name}</span>
                    <p>({item.value}% purchased this)</p>
                  </div>
                )
              )}
            </div>
          </Col>
        </Row>
        {titleColumn}
        <Row className="section-content">
          <Col lg={3} sm={3} xs={0} className="content-col1 respone-mobile">
            <div className="">
              <span>Leading Purchase</span>
            </div>
          </Col>
          <Col
            lg={3}
            sm={3}
            xs={12}
            className="section-current-cohort respone-mobile "
          >
            <span className="respone-section">Leading Purchase</span>
            <div className="content-row-five col5 respone-section">
              The most popular leading (first) product bought by these two
              groups is:
            </div>
            <div className="content-row-four">
              <span>
                {cardData?.data?.currentCohortData?.leadingPurchase?.name}
              </span>
            </div>
          </Col>
          <Col lg={3} sm={3} xs={12} className="respone-mobile">
            <span className="respone-section">Leading Purchase</span>
            <div className="content-row-five col5 respone-section">
              The most popular leading (first) product bought by these two
              groups is:
            </div>
            <div className="content-row-four">
              <span>
                {cardData?.data?.secondLastCohortData?.leadingPurchase?.name}
              </span>
            </div>
          </Col>
          <Col lg={3} sm={3} xs={12} className="respone-mobile">
            <span className="respone-section">Leading Purchase</span>
            <div className="content-row-five col5 respone-section">
              The most popular leading (first) product bought by these two
              groups is:
            </div>
            <div className="content-row-four">
              <span>
                {cardData?.data?.lastCohortData?.leadingPurchase?.name}
              </span>
            </div>
          </Col>
        </Row>
        <Row className="section-content">
          <Col
            lg={3}
            sm={3}
            xs={0}
            className="content-col1 col5 respone-mobile"
          >
            <div className="content-row-five">
              The most popular leading (first) product bought by these two
              groups is:
            </div>
          </Col>
          <Col
            lg={3}
            sm={3}
            xs={12}
            className="content-col1 col5 section-current-cohort respone-mobile perecent-buy"
          >
            <div className="content-row-five">{cardData?.data?.currentCohortData?.leadingPurchase?.value}% bought this product first</div>
          </Col>
          <Col
            lg={3}
            sm={3}
            xs={12}
            className="content-col1 col5 respone-mobile perecent-buy"
          >
            <div className="content-row-five"> {cardData?.data?.secondLastCohortData?.leadingPurchase?.value}% bought this product first</div>
          </Col>
          <Col
            lg={3}
            sm={3}
            xs={12}
            className="content-col1 col5 respone-mobile perecent-buy"
          >
            <div className="content-row-five">{cardData?.data?.lastCohortData?.leadingPurchase?.value}% bought this product first</div>
          </Col>
        </Row>
        <Row className="section-content">
          <Col
            lg={3}
            sm={3}
            xs={0}
            className="content-col1 respone-mobile respone-top5"
          >
            <div className="content-row-six">
              <span>Top 5 Products</span>
              <p>
                Over the past 3-months the most popular product in the two
                groups are:
              </p>
            </div>
          </Col>
          <Col
            lg={3}
            sm={3}
            xs={12}
            className="section-current-cohort respone-mobile"
          >
            <div className="content-row-six">
              {cardData?.data?.currentCohortData?.mostPopularProducts.map(
                (item, index) => (
                  <div className="d-flex flex-column" key={index}>
                    <span>{item.name}</span>
                    <p>({item.value}% purchased this)</p>
                  </div>
                )
              )}
            </div>
          </Col>
          <Col lg={3} sm={3} xs={12} className="respone-mobile">
            <div className="content-row-six">
              {cardData?.data?.secondLastCohortData?.mostPopularProducts.map(
                (item, index) => (
                  <div className="d-flex flex-column" key={index}>
                    <span>{item.name}</span>
                    <p>({item.value}% purchased this)</p>
                  </div>
                )
              )}
            </div>
          </Col>
          <Col lg={3} sm={3} xs={12} className="respone-mobile">
            <div className="content-row-six">
              {cardData?.data?.lastCohortData?.mostPopularProducts.map(
                (item, index) => (
                  <div className="d-flex flex-column" key={index}>
                    <span>{item.name}</span>
                    <p>({item.value}% purchased this)</p>
                  </div>
                )
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="card-footer">
        <p className="mb-0">
          <b>Tomorrow:</b> Product Thursday!
        </p>
        <p className="small text-muted">
          Delving into your Customer Segments, how they are changing and any
          actions you can take to drive growth.
        </p>
      </div>
    </div>
  );
};

export default CustomerValueWednesday;
