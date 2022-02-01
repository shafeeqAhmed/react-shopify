import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSearch } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "features/user/userSlice";

import "styles/anytics-subscribers.css";
import { useHistory } from "react-router";

function timeConverter(UNIX_timestamp, isFull = true) {
  let a = new Date(UNIX_timestamp * 1000);
  let months = [
    "January",
    "Februray",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let time = date + " " + month + " " + year;

  if (isFull) {
    time += " at " + hour + ":" + min + "GMT";
    return time;
  }
  return time;
}

const AnalyticsSubscriber = () => {
  const faSch = <FontAwesomeIcon icon={faSearch} />;
  const faBk = <FontAwesomeIcon icon={faBook} />;
  const [buttonAddSub, setButtonAddSub] = useState("+ Subscriber");
  const listUser = useSelector((state) => state.user.listUser);
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch, listUser]);
  const [windowWidth, setWindowWidth] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);
  useEffect(() => {
    let isMobile = window.matchMedia(
      "only screen and (max-width: 760px)"
    ).matches;
    isMobile ? setButtonAddSub("+") : setButtonAddSub("+ Subscriber");
  }, [windowWidth]);

  return (
    <Container className="padding-container" fluid>
      <Row>
        <Col>
          <div className="d-flex justify-content-center">
            <div className="card m-md-3 m-0 rounded shadow-sm search-card">
              <div className="card-header border-bottom-1 m-2 p-2 position-relative">
                <div className="input-group rounded">
                  <span className="input-group-text border-0" id="search-addon">
                    {faSch}
                  </span>
                  <input
                    type="search"
                    className="form-control rounded search-input"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <div className="ms-md-5 ms-2">
                    <Button variant="success" className="ms button-add">
                      {buttonAddSub}
                    </Button>
                  </div>
                </div>

                <p className="pt-3">
                  {listUser?.filter((e) => e.isEnabled === true).length} out of{" "}
                  {listUser?.length} recipients enabled
                </p>
              </div>
              <div className="card-body pt-0 px-0">
                <ul className="list-group">
                  {listUser?.map((item, index) => (
                    <li
                      className="list-group-item"
                      key={index}
                      onClick={() =>
                        history.push(`/edit-team-members/${item.id}`)
                      }
                    >
                      <div className="d-inline-flex">
                        <div className="icon px-3 py-1">{faBk}</div>
                        <div className="details">
                          <h6
                            className={`title ${
                              !item.isEnabled ? "text-red" : ""
                            }`}
                          >
                            {item.firstName + " " + item.lastName}{" "}
                            {!item.isEnabled ? " (Disabled)" : ""}{" "}
                          </h6>
                          <p>
                            {item.emailAddress}. Added{" "}
                            {timeConverter(item.dateCreated, false)}. Last
                            Updated Sent on{" "}
                            {timeConverter(item.dateCreated, true)}.
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AnalyticsSubscriber;
