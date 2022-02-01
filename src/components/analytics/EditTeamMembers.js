import {
  getAllUser,
  getUserById,
  updateUserById,
} from "features/user/userSlice";
import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import "styles/pages/editTeamMember.scss";

const EditTeamMembers = (props) => {
  const history = props.history;
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const listUser = useSelector((state) => state.user.listUser);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    isEnabled: true,
    mondaySubscription: false,
    tuesdaySubscription: false,
    wednesdaySubscription: false,
    thursdaySubscription: false,
    fridaySubscription: false,
    saturdaySubscription: false,
    sundaySubscription: false,
    dailyKipInsight: false,
    weekDigest: false,
    monthlySummary: false,
    yearlySummary: false,
  });

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setUserInfo({
        ...userInfo,
        [e.target.name]: e.target.checked,
      });
    } else {
      setUserInfo({
        ...userInfo,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = () => {
    const data = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      emailAddress: userInfo.emailAddress,
      isEnabled: userInfo.isEnabled,
      userSettings: {
        mondaySubscription: userInfo.mondaySubscription,
        tuesdaySubscription: userInfo.tuesdaySubscription,
        wednesdaySubscription: userInfo.wednesdaySubscription,
        thursdaySubscription: userInfo.thursdaySubscription,
        fridaySubscription: userInfo.fridaySubscription,
        saturdaySubscription: userInfo.saturdaySubscription,
        sundaySubscription: userInfo.sundaySubscription,
        dailyKipInsight: false,
        weekDigest: false,
        monthlySummary: false,
        yearlySummary: false,
      },
    };
    dispatch(updateUserById({ id, data }));
    history.push("/analytics-subscribers");
  };
  useEffect(() => {
    dispatch(getUserById(id));
    dispatch(getAllUser());
  }, [dispatch, id]);

  useEffect(() => {
    console.log('user' , userInfo)
    user &&
      setUserInfo({
        firstName: user.firstName,
        lastName: user.lastName,
        emailAddress: user.emailAddress,
        isEnabled: user.isEnabled,
        mondaySubscription: user?.userSettings?.mondaySubscription,
        tuesdaySubscription: user?.userSettings?.tuesdaySubscription,
        wednesdaySubscription: user?.userSettings?.wednesdaySubscription,
        thursdaySubscription: user?.userSettings?.thursdaySubscription,
        fridaySubscription: user?.userSettings?.fridaySubscription,
        saturdaySubscription: user?.userSettings?.saturdaySubscription,
        sundaySubscription: user?.userSettings?.sundaySubscription,
        dailyKipInsight: false,
        weekDigest: false,
        monthlySummary: false,
        yearlySummary: false,
      });
  }, [user]);

  return (
    <>
      {loading ? (
        ""
      ) : (
        <Container className="edit-team-members px-4 py-3" fluid>
          <Row>
            <Col lg={2} xs={0} />
            <Col className="pl-30 form-header">
              <h2 className="fw-bold text-label">
                Edit Email Report Subscriber
              </h2>
              <p className="text-content">
                Daily insights delivered straight to your teams inboxes. Keep
                the whole team in the loop without having to lift a finger. Add
                up to <b>{listUser.length} Team Members.</b>
              </p>
            </Col>
            <Col lg={2} xs={0} />
          </Row>
          <Row className="mb-30">
            <Col lg={2} xs={0} />
            <Col className="bg-white">
              <Form>
                <Row className="p-15">
                  <Col xs={12} md={6} className="form-left">
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold text-label title-label">
                        First name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={userInfo.firstName}
                        onChange={handleChange}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold text-label title-label">
                        Last name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={userInfo.lastName}
                        onChange={handleChange}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold text-label title-label">
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        disabled
                        value={userInfo.emailAddress}
                        onChange={handleChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} className="form-right">
                    <Form.Group className="mb-4">
                      <Form.Label className="text-label">
                        Insight Subscriptions
                      </Form.Label>
                      <br />
                      <Form.Text
                        className="sub-text"
                        as="p"
                        bsPrefix="sub-text"
                      >
                        Keep the whole team stay focused and driven by data!
                        Choose analytics delivered straight to this Users inbox.
                      </Form.Text>
                    </Form.Group>
                    <div className="mb-4">
                      <Form.Check type="checkbox">
                        <Form.Check.Input
                          type="checkbox"
                          isValid
                          checked={userInfo.mondaySubscription}
                          name="mondaySubscription"
                          onChange={handleChange}
                        />
                        <Form.Check.Label className="fw-bold text-label title-label">
                          Monday: Weekly Sales Forecast
                        </Form.Check.Label>
                        <Form.Control.Feedback
                          className="text-feedback"
                          type="valid"
                        >
                          An updated Sales Forecast for your business. Incuding
                          a long range Full Year forecast and a more detailed
                          one for the upcoming week.
                        </Form.Control.Feedback>
                      </Form.Check>
                    </div>
                    <div className="mb-4">
                      <Form.Check type="checkbox">
                        <Form.Check.Input
                          type="checkbox"
                          isValid
                          checked={userInfo.tuesdaySubscription}
                          name="tuesdaySubscription"
                          onChange={handleChange}
                        />
                        <Form.Check.Label className="fw-bold text-label title-label">
                          Tuesday: Customer Profile & Segmentation
                        </Form.Check.Label>
                        <Form.Control.Feedback
                          className="text-feedback"
                          type="valid"
                        >
                          Taking a look at how your different types of Customers
                          are evolving and updating your A.I. driven Segments.
                        </Form.Control.Feedback>
                      </Form.Check>
                    </div>
                    <div className="mb-4">
                      <Form.Check type="checkbox">
                        <Form.Check.Input
                          type="checkbox"
                          isValid
                          checked={userInfo.wednesdaySubscription}
                          name="wednesdaySubscription"
                          onChange={handleChange}
                        />
                        <Form.Check.Label className="fw-bold text-label title-label">
                          Wednesday: Customer Profile & Cohorts
                        </Form.Check.Label>
                        <Form.Control.Feedback
                          className="text-feedback"
                          type="valid"
                        >
                          Takes the Customer Segments outlined on Tuesday and
                          predicts how this months Cohort is shaping up.
                        </Form.Control.Feedback>
                      </Form.Check>
                    </div>
                    <div className="mb-4">
                      <Form.Check type="checkbox">
                        <Form.Check.Input
                          type="checkbox"
                          isValid
                          checked={userInfo.thursdaySubscription}
                          name="thursdaySubscription"
                          onChange={handleChange}
                        />
                        <Form.Check.Label className="fw-bold text-label title-label">
                          Thursday: Product Performance
                        </Form.Check.Label>
                        <Form.Control.Feedback
                          className="text-feedback"
                          type="valid"
                        >
                          How are your Products Performing? Are there any trends
                          developing.
                        </Form.Control.Feedback>
                      </Form.Check>
                    </div>
                    <div className="mb-4">
                      <Form.Check type="checkbox">
                        <Form.Check.Input
                          type="checkbox"
                          isValid
                          checked={userInfo.fridaySubscription}
                          name="fridaySubscription"
                          onChange={handleChange}
                        />
                        <Form.Check.Label className="fw-bold text-label title-label">
                          Friday: Sales Forecast Update
                        </Form.Check.Label>
                        <Form.Control.Feedback
                          className="text-feedback"
                          type="valid"
                        >
                          An update on Mondays Sales Forecast. Has this week
                          performed as expected and how has that changed the
                          full year predition.
                        </Form.Control.Feedback>
                      </Form.Check>
                    </div>
                    <div className="mb-4">
                      <Form.Check type="checkbox">
                        <Form.Check.Input
                          type="checkbox"
                          isValid
                          checked={userInfo.saturdaySubscription}
                          name="saturdaySubscription"
                          onChange={handleChange}
                        />
                        <Form.Check.Label className="fw-bold text-label title-label">
                          Saturday: Stat-er-day!
                        </Form.Check.Label>
                        <Form.Control.Feedback
                          className="text-feedback"
                          type="valid"
                        >
                          Detailed stats for you to get your teeth into over
                          your Saturday morning coffee.
                        </Form.Control.Feedback>
                      </Form.Check>
                    </div>
                    <div className="mb-4">
                      <Form.Check type="checkbox">
                        <Form.Check.Input
                          type="checkbox"
                          isValid
                          checked={userInfo.sundaySubscription}
                          name="sundaySubscription"
                          onChange={handleChange}
                        />
                        <Form.Check.Label className="fw-bold text-label title-label">
                          Sunday: Big Numbers
                        </Form.Check.Label>
                        <Form.Control.Feedback
                          className="text-feedback"
                          type="valid"
                        >
                          Some big numbers for Sunday and not to much thinking.
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
              <div className="list-cancel">
                <Button onClick={() => history.push("/analytics-subscribers")} variant="outline-secondary" className="button-cancel">
                  Cancel
                </Button>
                <Button
                  variant={(userInfo && userInfo?.isEnabled) ? 'outline-danger' : 'outline-success'}
                  className="button-delete"
                  onClick={() =>
                    setUserInfo({
                      ...userInfo,
                      isEnabled: !userInfo.isEnabled,
                    })
                  }
                >
                  { (userInfo && userInfo?.isEnabled) ? 'Disable' : 'Enable'}
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
        </Container>
      )}
    </>
  );
};

export default EditTeamMembers;
