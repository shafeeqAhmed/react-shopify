import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import {
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import "styles/pages/analytic-card.scss";
import { Col, Container, Row } from "react-bootstrap";
import { getCardData } from "features/cardData/cardDataSlice";
import Monday from "./Monday";
import CustomerSegmentation from "components/customer/CustomerSegmentation";
import CustomerValueWednesday from "components/customer/CustomerValueWednesday";
import ProductThursday from "../ProductThursday";
import ProgressFriday from "../ProgressFriday";
import StatErDay from "components/customer/StatErDay";
import Sunday from "components/customer/Sunday";

const AnalyticCard = () => {
  const faPl = <FontAwesomeIcon icon={faPlay} />;
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const [day, setDay] = useState("");
  const [briefDate, setBriefDate] = useState("");
  const [nextButtonActive, setNextButtonActive] = useState(false);
  const [previousButtonActive, setPreviousButtonActive] = useState(false);

  const getDataCardDatePrevious = (date) => {
    dispatch(getCardData(date));
    setNextButtonActive(false);
    setPreviousButtonActive(true);
    setCurrentDate(date);
  };
  const getDataCardDateNext = (date) => {
    dispatch(getCardData(date));
    setNextButtonActive(true);
    setPreviousButtonActive(false);
    setCurrentDate(date);
  };

  const cardData = useSelector((state) => state.cardData.cardData);
  useEffect(() => {
    setDate(moment(cardData?.data?.date).format("dddd Do MMMM YYYY"));
    setBriefDate(moment(cardData?.data?.date).format("Do MMM YY"));
    setDay(moment(cardData?.data?.date).format("dddd"));
  }, [cardData]);
  useEffect(() => {
    dispatch(getCardData(currentDate));
  }, [currentDate, dispatch]);
  const renderContent = () => {
    let content = null;
    switch (moment(currentDate).isoWeekday()) {
      case 1:
        content = <Monday day={day} date={date} />;
        break;
      case 2:
        content = <CustomerSegmentation day={day} date={date} />;
        break;
      case 3:
        content = <CustomerValueWednesday day={day} date={date} />;
        break;
      case 4:
        content = <ProductThursday day={day} date={date} />;
        break;
      case 5:
        content = <ProgressFriday day={day} date={date} />;
        break;
      case 6:
        content = <StatErDay day={day} date={date} />;
        break;
      case 7:
        content = <Sunday />;
        break;
      default:
        break;
    }
    return content;
  };
  return (
    <>
      <Container className="padding-container" fluid>
        <Row>
          <Col>
            <div className="d-inline-flex">
              <span
                onClick={() =>
                  getDataCardDatePrevious(
                    moment(currentDate).subtract(1, "days").format("YYYY-MM-DD")
                  )
                }
                className={`icon-rotate card-sm-icon ${
                  previousButtonActive ? "" : "icon-not-active"
                }`}
              >
                {faPl}
              </span>
              <p className="prev-next-button">{briefDate}</p>
              <span
                onClick={() =>
                  getDataCardDateNext(
                    moment(currentDate).add(1, "days").format("YYYY-MM-DD")
                  )
                }
                className={`card-sm-icon icon ${
                  nextButtonActive ? "" : "icon-not-active"
                }`}
              >
                {faPl}
              </span>
            </div>
            {renderContent()}
          </Col>
        </Row>
      </Container>
      <div className="footer-analyticard fs-m section-flex">
            <div className="icon-whisky"></div>
            <div className="footer-text">
                <div className="infor-one">
                    <span>At Distil A.I. we’re on a mission to help businesses like yours transform your data from an expensive, time-consuming challenge into a powerful goal-achieving asset.</span>
                </div>
                <div className="infor-two">
                    <p className="infor-text-two">See how far you can grow, automate, personalise and scale your store with data. Book a demo now. </p>
                </div>
            </div>
        </div>
    </>
  );
};

export default AnalyticCard;
