import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "../../styles/pages/editTeamMember.scss";

const EditTeamMembers = () => {
  const faTra = <FontAwesomeIcon icon={faTrashAlt} />;

  return (
    <>
      <Container className="edit-team-members px-4 py-3" fluid>
        <Row>
          <Col lg={2} xs={0} />
          <Col className="pl-30 form-header">
            <h2 className="fw-bold text-label">Edit Email Report Subscriber</h2>
            <p className="text-content">
              Daily insights delivered straight to your teams inboxes. Keep the
              whole team in the loop without having to lift a finger. Add up to
              20 <b>Team Members.</b>
            </p>
          </Col>
          <Col lg={2} xs={0} />
        </Row>
        <Row className="mb-30">
          <Col lg={2} xs={0} />
          <Col className="bg-white ">
            <Form>
              <Row className="p-15">
                <Col xs={12} md={6} className="form-left">
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
                <Col xs={12} md={6} className="form-right">
                  <Form.Group className="mb-4">
                    <Form.Label className="text-label">
                      Insight Subscriptions
                    </Form.Label>
                    <br />
                    <Form.Text className="sub-text">
                      Keep the whole team stay focused and driven by data!
                      Choose analytics delivered straight to this Users inbox.
                    </Form.Text>
                  </Form.Group>
                  <div className="mb-4">
                    <Form.Check type="checkbox">
                      <Form.Check.Input type="checkbox" isValid />
                      <Form.Check.Label className="fw-bold text-label">
                        Daily KPI Insights
                      </Form.Check.Label>
                      <Form.Control.Feedback
                        className="text-feedback"
                        type="valid"
                      >
                        Stay on top of things with daily KPIs and a themed set
                        of analytics delivered to your email each day.
                      </Form.Control.Feedback>
                    </Form.Check>
                  </div>
                  <div className="mb-4">
                    <Form.Check type="checkbox">
                      <Form.Check.Input type="checkbox" isValid />
                      <Form.Check.Label className="fw-bold text-label">
                        Weekly Digest
                      </Form.Check.Label>
                      <Form.Control.Feedback
                        className="text-feedback"
                        type="valid"
                      >
                        A selection of highlights from the previous weeks daily
                        insights summarised into one email. Delivered on Monday.
                      </Form.Control.Feedback>
                    </Form.Check>
                  </div>
                  <div className="mb-4">
                    <Form.Check type="checkbox">
                      <Form.Check.Input type="checkbox" isValid />
                      <Form.Check.Label className="fw-bold text-label">
                        Monthly Summary
                      </Form.Check.Label>
                      <Form.Control.Feedback
                        className="text-feedback"
                        type="valid"
                      >
                        Monthly KPIs and a summary of the previous moth,
                        delivered on the first of each month.
                      </Form.Control.Feedback>
                    </Form.Check>
                  </div>
                  <div className="mb-4">
                    <Form.Check type="checkbox">
                      <Form.Check.Input type="checkbox" isValid />
                      <Form.Check.Label className="fw-bold text-label">
                        Yearly Summary
                      </Form.Check.Label>
                      <Form.Control.Feedback
                        className="text-feedback"
                        type="valid"
                      >
                        Fiancial Year End KPIs and a summary of the year.
                        Delivered at the end of each financial year.
                      </Form.Control.Feedback>
                    </Form.Check>
                  </div>
                </Col>
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
              <Button variant="outline-danger" className="button-delete">
                {faTra} Delete
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

export default EditTeamMembers;
