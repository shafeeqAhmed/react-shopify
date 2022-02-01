import React from "react";
import { Container } from "react-bootstrap";

import "styles/pages/customer/stat-er-day.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
const Sunday = () => {
  const faDolar = <FontAwesomeIcon icon={faDollarSign} />;
  const faIn = <FontAwesomeIcon icon={faInfo} />;
  return (
    <div className="card m-0 p-2 rounded shadow-sm analytic-card page-stat-erday">
      <div className="card-header border-bottom-1 pl-3 position-relative">
                <div className="row card-header-row">
                  <div className="col-1 d-flex card-col-icon align-items-center">
                    <div className="card-icon">{faDolar}</div>
                  </div>
                  <div className="col-11 card-title-col">
                    <div className="card-title fs-5 fw-bold">
                    Vanity Sunday
                    </div>
                  </div>
          <div className="col-12 card-offset">
                    <p className="card-info small">
                      How to read information in <br></br>this card?
                      <span className="card-sm-icon m-2">{faIn}</span>
                    </p>
                    <p className="small text-muted mb-1 mb-md-2">
                      Monday 1st December 2021
                    </p>
                    <div className="text-wrap pr-3 w-75">
                      <p className="card-text">
                      Yesterday we looked at your Segments and how they are developing. Today we can cross-reference that with new Customers this cohort and see if your actions this month are driving higher LTV Customers.
                      </p>
                    </div>
                  </div>
                </div>
      </div>
      <Container className="px-4 py-3 section-container" fluid>
        
      </Container>
      <div className="card-footer">
                <p className="mb-0">
                  <b>Tomorrow:</b> Product Thursday
                </p>
                <p className="small text-muted">
                  Delving into your Customer Segments, how they are changing and
                  any actions you can take to drive growth.
                </p>
      </div>
    </div>
  );
};

export default Sunday;
