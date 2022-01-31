import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faInfo, faPlay } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'

const AnalyticCard = () => {
    const faDolar = <FontAwesomeIcon icon={faDollarSign} />
    const faIn = <FontAwesomeIcon icon={faInfo} />
    const faPl = <FontAwesomeIcon icon={faPlay} />

    return (
        <>
            <Container className="px-4 py-3" fluid>
            <Row>
                <Col>
                    <div className="d-inline-flex mx-3">
                    <span className="icon-rotate card-sm-icon">{faPl}</span>
                    <p className="px-2 small">1st Dec 21</p> 
                    <span className="card-sm-icon icon">{faPl}</span>     
                    </div>        
                    <div className="card m-md-3 m-0 p-2 rounded shadow-sm analytic-card">
                        <div className="card-header border-bottom-1 pl-3 position-relative">      
                            <div className="row card-header-row">
                                <div className="col-1 d-flex card-col-icon align-items-center">
                                    <div className="card-icon">
                                        {faDolar}
                                    </div> 
                                </div>     
                                <div className="col-11 card-title-col">
                                <div className="card-title fs-5 fw-bold">                                             
                                Catch-up Monday</div>                                
                                </div>  
                                <div className="col-12 card-offset">
                                    <p className="card-info small">How to read information in <br></br>this card?
                                    <span className="card-sm-icon m-2">
                                        {faIn}
                                    </span>
                                    </p>
                                    <p className="small text-muted mb-1 mb-md-2">Monday 1st December 2021</p>
                                    <div className="text-wrap pr-3 w-75">
                                    <p className="card-text">Let's start the week right. Review what happened over the weekend and last week, track that against your usual business performance to see how you're doing.</p>
                                    </div>
                                </div>  
                            </div>                    
                            
                        </div>   
                        <div className="card-body"></div>
                        <div className="card-footer">
                            <p className="mb-0"><b>Tomorrow:</b> Customer Segmentation Tuesday!</p>    
                            <p className="small text-muted">Delving into your Customer Segments, how they are changing and any actions you can take to drive growth.</p>
                        </div>                        
                    </div>
                </Col>
            </Row>
        </Container>    
        </>       
    )
}

export default AnalyticCard