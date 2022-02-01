import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment'
import { useDispatch, useSelector } from "react-redux";
import { getCardData } from "features/cardData/cardDataSlice";
import "styles/pages/analytic-header.scss";

const AnalyticHeader = () => {
  const faIn = <FontAwesomeIcon icon={faInfo} />;
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const cardData = useSelector(state => state.cardData.cardData)
  // eslint-disable-next-line
  const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'))

  useEffect(() => {
    dispatch(getCardData(currentDate))
  }, [dispatch, currentDate])
  return (
    <Container
      className="analytic-header px-4 bg-gray border border-bottom-1 header-info-mobile header"
      fluid
    >
      <Row>
        <Col xs={6} lg={2} className="py-3 section-col">
          <div className="section-one">
            <p className="mb-0 lh-1 text-muted">
              Yesterday's Sales Total
            </p>
          </div>
          <div className="section-two">
          <p className="mb-1 value-money">
          £23,456
          </p>
          </div>
          <div className="section-three">
          <p className="small">
            <span className="text-green-up">Up</span> from your <br></br>
            <b>
            £21,234
            </b>{" "}
            rolling 7-days average
          </p>
          </div>
        </Col>
        <Col xs={6} lg={2} className="py-3 section-col">
        <div className="section-one">
          <p className="mb-0 lh-1 text-muted">
            {" "}
            Yesterday's Average Order Value
          </p>
          </div>
          <div className="section-two">
          <p className="mb-1 value-money">
          £23.56
          </p>
          </div>
          <div className="section-three">
          <p className="small">
            <span className="text-red-down">Down</span> from your <br></br>
            <b>
            £38.34
            </b>{" "}
            rolling 7-days average
          </p>
          </div>
        </Col>
        <Col xs={6} lg={2} className=" py-3 section-col">
        <div className="section-one">
          <p className="mb-0 lh-1 text-muted">
              Yesterday's 30 day <br></br>
              Active Customer Count
          </p>
          </div>
          <div className="section-two">
          <p className="mb-1 value-money">3456</p>
          </div>
          <div className="section-three">
          <p className="small mb-0 text-muted">Active Customers</p>
          <p className="mb-1 value-money">45</p>
          <p className="small text-muted">Lost Customers</p>
          </div>
        </Col>
        <Col xs={6} lg={2} className="py-3 section-col">
        <div className="section-one">
          <p className="mb-0 lh-1 text-muted">
            Today you have
          </p>
          </div>
          <div className="section-two">
          <p className="mb-1 value-money">1,345</p>
          </div>
          <div className="section-three">
          <p className="small text-muted">
            At Risk of Leaving.
            <br></br>
            <span className="text-red-down fw-bold"> 28%</span> of them are{" "}
            <b>loyal</b> or <b>high-value.</b>
          </p>
          </div>
        </Col>
        <Col xs={6} lg={4}>
          <div className="d-flex justify-content-end section-one">
            <p className="header-info float-right small">
              How is this calculated?{" "}
              <span className="card-sm-icon m-2">{faIn}</span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AnalyticHeader;
