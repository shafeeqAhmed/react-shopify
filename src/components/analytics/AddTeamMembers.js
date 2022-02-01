import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button, Modal } from "react-bootstrap";
import { createUser, getAllUser } from "features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const AddTeamMembers = () => {
  const dispatch = useDispatch();

  const errorMessage = useSelector((state) => state.user.error);
  const listUser = useSelector((state) => state.user.listUser);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isAdmin: false,
  });
  const [showModal, setModal] = useState(false);
  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setUser({ ...user, [e.target.name]: e.target.checked });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    dispatch(createUser(user));
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  return (
    <>
      <Container className="add-team-members px-4 py-3" fluid>
        <Row>
          <Col lg={2} xs={0} />
          <Col className="pl-30 form-header">
            <h2 className="fw-bold text-label">Add Email Report Subscriber</h2>
            <p className="text-content">
              Daily insights delivered straight to your teams inboxes. Keep the
              whole team in the loop without having to lift a finger. Add up to{" "}
              <b>{listUser.length} Team Members.</b>
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
                    <Form.Control
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-label">
                      Last name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-label">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>
                  <div className="mb-4">
                    <Form.Check type="checkbox">
                      <Form.Check.Input
                        type="checkbox"
                        isValid
                        defaultChecked={user.isAdmin}
                        name="isAdmin"
                        onChange={handleChange}
                      />
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
                onClick={handleSubmit}
              >
                Save
              </Button>
            </div>
          </Col>
          <Col lg={2} xs={0} />
        </Row>
        {showModal && (
          <div className="container-modal">
            <div className="modal-status">
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  {errorMessage !== "" && <p>{errorMessage}</p>}
                  {errorMessage === "" && <p>Add Member Successful.</p>}
                </Modal.Body>

                <Modal.Footer>
                  <Button onClick={closeModal} variant="secondary">
                    Close
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
            </div>
            <div className="overlay-modal"></div>
          </div>
        )}
      </Container>
    </>
  );
};

export default AddTeamMembers;
