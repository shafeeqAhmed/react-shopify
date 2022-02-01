import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faInfo } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'
import "../../../styles/pages/forecast.scss";

import ChartForecast from 'components/analytics/chart/ChartForecast'

const ForeCast = () => {
    const faDolar = <FontAwesomeIcon icon={faDollarSign} />
    const faIn = <FontAwesomeIcon icon={faInfo} />

    return (
        <>
            <Container className="padding-container p-5 forecast" fluid>
                <Row>
                    <Col>
                        <div className="card m-md-3 m-0 p-2 rounded shadow-sm">
                            <div className="card-header border-bottom-1 pl-3 position-relative">
                                <div className="row card-header-row">
                                    <div className="col-1 d-flex card-col-icon align-items-center">
                                        <div className="card-icon">
                                            {faDolar}
                                        </div>
                                    </div>
                                    <div className="col-11 card-title-col">
                                        <div className="card-title fs-l fw-400 forecast_title text-black">
                                            Monday Forecast</div>
                                    </div>
                                    <div className="col-12 card-offset">
                                        <p className="card-info fs-xs text-black">How to read information in <br></br>this card?
                                    <span className="card-sm-icon m-2">
                                                {faIn}
                                            </span>
                                        </p>
                                        <p className="fs-m text-gray mb-1 mb-md-2 text-gray">Monday 1st December 2021</p>
                                        <div className="text-wrap pr-3 w-75">
                                            <p className="card-text fs-m text-black">Let's start the week right. Review what happened over the weekend and last week, track that against your usual business performance to see how you're doing.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-body m-md-3 m-0 border-bottom-1">
                                <ChartForecast />
                            </div>
                            <div className="card-footer">
                                <p className="fs-m mb-0 text-black"><b>Tomorrow:</b> Customer Segmentation Tuesday!</p>
                                <p className="fs-xs text-gray">Delving into your Customer Segments, how they are changing and any actions you can take to drive growth.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ForeCast