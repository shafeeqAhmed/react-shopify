import React from 'react';
import AnalyticCardDetail from "components/analytics/analytic/AnalyticCardDetail";
import {
    faDollarSign,
    faInfo,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Monday({day, date}) {
    const faDolar = <FontAwesomeIcon icon={faDollarSign} />;
    const faIn = <FontAwesomeIcon icon={faInfo} />;
    return (
        <div className="card m-0 p-2 rounded shadow-sm analytic-card">
              <div className="card-header border-bottom-1 pl-3 position-relative">
                <div className="row card-header-row">
                  <div className="col-1 d-flex card-col-icon align-items-center">
                    <div className="card-icon">{faDolar}</div>
                  </div>
                  <div className="col-11 card-title-col">
                    <div className=" fs-l fw-bold">
                      Catch-up {day}
                    </div>
                  </div>
                  <div className="col-12 card-offset">
                    <p className="card-info fs-xs">
                      How to read information in <br></br>this card?
                      <span className="card-sm-icon m-2">{faIn}</span>
                    </p>
                    <p className="fs-m text-muted mb-1 mb-md-2">
                      {date}
                    </p>
                    <div className="text-wrap pr-3 w-75">
                      <p className="card-text fs-m">
                        Let's start the week right. Review what happened over
                        the weekend and last week, track that against your usual
                        business performance to see how you're doing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <AnalyticCardDetail />
              </div>
              <div className="card-footer fs-m">
                <p className="mb-0">
                  <b>Tomorrow:</b> Customer Segmentation Tuesday!
                </p>
                <p className="small text-muted">
                  Delving into your Customer Segments, how they are changing and
                  any actions you can take to drive growth.
                </p>
              </div>
            </div> 
    );
}

export default Monday;