import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { verifiedPartner } from "features/setting/settingSlice";
import LineHorizontal from "common/LineHorizontal";
import "styles/pages/settings.scss";
import TimezoneSelect from "react-timezone-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Settings = () => {
  const faCheckIcon = <FontAwesomeIcon icon={faCheck} />;
  const faCross = <FontAwesomeIcon icon={faTimes} />;

  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [dataPartner, setDataPartner] = useState("");
  const dispatch = useDispatch();

  var options = [];
  for (var i = 1; i <= 24; i++) {
    if (i > 12) {
      options.push({ value: i, label: i - 12 + " PM" });
    } else {
      options.push({ value: i, label: i + " AM" });
    }
  }
  const verifiedPartnerData = () => {
    dispatch(verifiedPartner(dataPartner));
  };
  const validationData = useSelector((state) => state.setting.validation);
  useEffect(() => {
    console.log("===================settingData", validationData);
  }, [validationData]);
  const handleChange = (e) => {
    if (e.target.type === "text") {
      if (e.target.name === "dataPartner") {
        setDataPartner(e.target.value);
      }
    }
    if (e.target.type === "select-one") {
    }
  };
  const optionElements = []; // we create a new array which will evaluate to a value when we inject it into a JSX expression
  options.forEach((item, i) =>
    optionElements.push(
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    )
  );
  return (
    <div className="page-setting">
      <Container className="px-2 pt-24" fluid>
        <Row className="mb-30">
          <Col lg={2} xs={0} />
          <Col className="bg-white br-5">
            <Form className="mb-4 box-content">
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Timezone</Form.Label>
                <Col lg={4} xs={8}>
                  <TimezoneSelect
                    value={selectedTimezone}
                    onChange={setSelectedTimezone}
                  />
                </Col>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">
                  Financial Year Start
                </Form.Label>
                <Col lg={4} xs={8}>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
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
                  <Form.Control as="select" onChange={handleChange}>
                    {optionElements}
                  </Form.Control>
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
                    <Form.Control
                      type="text"
                      name="dataPartner"
                      value={dataPartner}
                      onChange={handleChange}
                    ></Form.Control>
                  </Col>
                  <Col lg={2} xs={4}>
                    <Button
                      onClick={verifiedPartnerData}
                      disabled={dataPartner === ""}
                      className="btn btn-success"
                    >
                      Verify
                    </Button>
                  </Col>
                  <Col lg={2}>
                    <div className="text-desc d-flex align-items-center h-100 d-sm-block d-none">
                      <div className="d-flex align-items-center h-100">
                        {validationData.validated ? (
                          <div>
                            <span className="mx-2">{faCheckIcon}</span>
                            <span>Verified</span>
                          </div>
                        ) : (
                          <div>
                            <span className="mx-2">{faCross}</span>
                            <span>Unverified</span>
                          </div>
                        )}
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
          </Col>
          <Col lg={2} xs={0} />
        </Row>
        <Row>
          <Col lg={2} xs={0}></Col>
          <Col>
            <div className="d-flex flex-column-reverse justify-content-between flex-sm-row">
              <Button variant="outline-secondary mb-2">Cancel</Button>
              <Button variant="success mb-2">Apply</Button>
            </div>
          </Col>
          <Col lg={2} xs={0}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Settings;
