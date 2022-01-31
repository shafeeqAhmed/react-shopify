import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

const AddTeamMembers = () => {
  return (
    <>
      <Container className="add-team-members px-4 py-3" fluid>
        <Row>
          <Col lg={2} xs={0} />
          <Col className="pl-30 form-header">
            <h2 className="fw-bold text-label">Add Email Report Subscriber</h2>
            <p className="text-content">
              Daily insights delivered straight to your teams inboxes. Keep the
              whole team in the loop without having to lift a finger. Add up to
              20 Team Members.
            </p>
          </Col>
          <Col lg={2} xs={0} />
        </Row>
        <Row className="mb-30">
          <Col lg={2} xs={0} />
          <Col className="bg-white ">
            <Form className="p-15">
              <Row>
                <Col xs={12} md={9}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-label">
                      First name
                    </Form.Label>
                    <Form.Control type="text"></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-label">
                      Last name
                    </Form.Label>
                    <Form.Control type="text"></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-label">
                      Email address
                    </Form.Label>
                    <Form.Control type="email"></Form.Control>
                  </Form.Group>
                  <div className="mb-4">
                    <Form.Check type="checkbox">
                      <Form.Check.Input type="checkbox" isValid />
                      <Form.Check.Label className="fw-bold text-label">
                        Admin User
                      </Form.Check.Label>
                      <Form.Control.Feedback
                        className="text-feedback"
                        type="valid"
                      >
                        If checked this User is able to access the Distil AI App
                        Settings section.
                      </Form.Control.Feedback>
                    </Form.Check>
                  </div>
                </Col>
                <Col xs={12} md={3}></Col>
              </Row>
            </Form>
          </Col>
          <Col lg={2} xs={0} />
        </Row>
        <Row>
          <Col lg={2} xs={0} />
          <Col className="list-buttons">
            <div>
              <Button variant="outline-secondary" className="button-cancel">
                Cancel
              </Button>
            </div>
            <div>
              <Button
                className="button-success"
                variant="success"
                type="submit"
              >
                Save
              </Button>
            </div>
          </Col>
          <Col lg={2} xs={0} />
        </Row>
      </Container>
    </>
  );
};

export default AddTeamMembers;
