import React from "react";
import { Container, Col, Row} from "react-bootstrap";

import "styles/pages/analytis-infor.scss";

const AnalyticsInfors = () => {
  return (
    <div className="analytics-infor">
      <Container className="py-3 section-infor" fluid>
        <Row className="row-1"></Row>
        <Row lg={5}>
          <Col lg={3} md={2} sm={2}/>
          <Col lg={5} md={6} sm={8} xs={12} className="section-flex">
            <div className="icon-whisky"></div>
            <div>
                <div className="infor-one">
                    <span>Thank you for installing the Distil AI Analytics Shopify App</span>
                </div>
                <div className="infor-two">
                    <p className="infor-text-two">Your store data is being analyised and key performance indicators and insights extracted. This typically takes about an hour. </p>
                    <p className="infor-text-three">We will notify you via email as soon as your first insights are availale, or you can check back here. </p>
                </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={2}/>
        </Row>
        <Row className="row-3"></Row>
      </Container>
    </div>
  );
};

export default AnalyticsInfors;
