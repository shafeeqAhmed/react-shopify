import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoundSign, faInfo } from '@fortawesome/free-solid-svg-icons'

const AnalyticHeader = () => {
    const faPound = <FontAwesomeIcon icon={faPoundSign} />
    const faIn = <FontAwesomeIcon icon={faInfo} />

    return (
        <Container className="bg-gray border border-bottom-1 header-info-mobile" fluid>
            <Row>
                <Col xs={6} lg={2} className="px-4 py-3">
                    <p className="mb-0 lh-1"><small>Yesterday's Sales Total</small></p>
                        <p className="fs-5 fw-bold mb-1"><span>{faPound} </span>23,456</p>
                        <p className="small">
                            <span className='text-green fw-bold'>Up</span> from your <br></br>
                            <b><span>{faPound} </span>21,234 </b> rolling 7-days average                
                        </p>
                </Col>
                <Col xs={6} lg={2} className="px-4 py-3">
                <p className="mb-0 lh-1"> <small>Yesterday's Average Order Value</small></p>
                        <p className="fs-5 fw-bold mb-1"><span>{faPound} </span>23.56</p>
                        <p className="small">
                            <span className='text-red fw-bold'>Down</span> from your <br></br>
                            <span>{faPound} </span>38.34 rolling 7-days average                
                        </p>
                </Col>
                <Col xs={6} lg={2} className="px-4 py-3">
                  <p className="mb-0 lh-1"><small>Yesterday's 30 day <br></br>
                        Active Customer Count
                    </small></p>
                        <p className="fs-5 fw-bold mb-1">3456</p>
                        <p className="small mb-0">
                            Active Customers              
                        </p>
                        <p className="fs-5 fw-bold mb-1">45</p>
                        <p className="small">Lost Customers</p>
                </Col>
                <Col xs={6} lg={2} className="px-4 py-3">
                        <p className="mb-0 lh-1"><small>Today you have</small></p>
                        <p className="fs-5 fw-bold mb-1">1,345</p>
                        <p className="small">
                            At Risk of Leaving. 
                            <br></br>
                            <span className="text-red fw-bold"> 28%</span> of them are <b>loyal</b> or <b>high-value.</b>             
                        </p>
                </Col>
                <Col xs={6} lg={4}>               
                        <div className="d-flex justify-content-end">
                        <p className="header-info float-right small">How is this calculated? <span className="card-sm-icon m-2">{faIn}</span></p>
                        </div>
                </Col>
            </Row>
        </Container>
        
    )
}

export default AnalyticHeader