import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LineHorizontal from "../../common/LineHorizontal";
import "../../styles/pages/settings.scss";

const Settings = () => {
  const faCheckIcon = <FontAwesomeIcon icon={faCheck} />;

  return (
    <div className="page-setting">
      <Container className="px-4 py-3" fluid>
        <Row>
          <Col lg={2} xs={0} />
          <Col>
            <Form className="px-4 mb-4">
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Timezone</Form.Label>
                <Col lg={4} xs={8}>
                  <Form.Select aria-label="Default select example">
                    <option></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">
                  Financial Year Start
                </Form.Label>
                <Col lg={4} xs={8}>
                  <Form.Select aria-label="Default select example">
                    <option></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col lg={8}>
                  <Form.Text className="text-desc">
                    We tailor your insights to match your financial year. If you
                    know this select it here. You can always ammend this setting
                    later.
                  </Form.Text>
                </Col>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Email Update Time</Form.Label>
                <Col lg={4} xs={8}>
                  <Form.Select aria-label="Default select example">
                    <option></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col lg={8}>
                  <Form.Text className="text-desc">
                    Distil AI Analytics is able to send out Daily KPI Insights
                    to your whole team so they can stay always be informed. Pick
                    a time you would like this to be delivered.
                  </Form.Text>
                </Col>
              </Form.Group>
              <LineHorizontal />
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">
                  Shopify Plus Partner
                </Form.Label>
                <br />
                <Form.Text className="text-desc mb-2">
                  If you have a Shopify Plus Partner Agency registered with
                  Distil AI you can add them here. This means they will be able
                  to contact Distil AI Support on your behalf should you need
                  it.
                </Form.Text>
                <Row>
                  <Col lg={4} xs={8}>
                    <Form.Control />
                  </Col>
                  <Col lg={2} xs={4}>
                    <Form.Control placeholder="Verify" />
                  </Col>
                  <Col lg={2}>
                    <div className="text-desc d-flex align-items-center h-100 d-sm-block d-none">
                      <div className="d-flex align-items-center h-100">
                        <span className="mx-2">{faCheckIcon}</span>
                        <span>Verified</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} xs={8}>
                    <Form.Text className="text-desc text-register">
                      Shopify Plus Partners register{" "}
                      <span className="text-decoration-underline">here</span>
                    </Form.Text>
                  </Col>
                  <Col lg={0} xs={4}>
                    <div className="text-desc d-flex align-items-center h-100 d-sm-none d-block">
                      <div className="d-flex align-items-center h-100">
                        <span className="mx-2">{faCheckIcon}</span>
                        <span>Verified</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Form.Group>
              <LineHorizontal />
              <div className="text-desc">
                Changes to certain settings may take a while to take effect and
                they require data to be re-analyised
              </div>
            </Form>
            <div className="d-flex flex-column-reverse justify-content-between flex-sm-row">
              <Button variant="outline-secondary mb-2">Cancel</Button>
              <Button variant="success mb-2">Apply</Button>
            </div>
          </Col>
          <Col lg={2} xs={0} />
        </Row>
      </Container>
    </div>
  );
};

export default Settings;
