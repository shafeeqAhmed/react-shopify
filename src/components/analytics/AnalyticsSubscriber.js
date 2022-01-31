import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faSearch } from '@fortawesome/free-solid-svg-icons'
import '../../styles/anytics-subscribers.css'

const AnalyticsSubscriber = () => {
    const faSch = <FontAwesomeIcon icon={faSearch} />
    const faBk = <FontAwesomeIcon icon={faBook} />
    return (
        <Container className="px-4 py-3" fluid>
            <Row>
                <Col>
                           
                    <div className="d-flex justify-content-center">
                    <div className="card m-md-3 m-0 rounded shadow-sm search-card">
                        <div className="card-header border-bottom-1 m-2 p-2 position-relative">      
                        <div className="input-group rounded">
                        <span className="input-group-text border-0" id="search-addon">
                                {faSch}
                            </span>
                            <input type="search" className="form-control rounded search-input" placeholder="Search" aria-label="Search"
                            aria-describedby="search-addon" />                            
                            </div>   
                            <p className='pt-3'>3 out of 20 recipients enabled</p>                                
                        </div>   
                        <div className="card-body pt-0 px-0">
                            <ul className="list-group">
                                <li className="list-group-item">
                                <div className="d-inline-flex">
                                    <div className="icon px-3 py-1">
                                        {faBk}
                                    </div>
                                    <div className="details">
                                        <h6 className="title">
                                            Lewis Hamilton    
                                        </h6>    
                                        <p>
                                            lewis.hamilton@distil.ai. Added 12th December 2020. Last Updated Sent on 1st December 2021 at 23:45 GMT.
                                        </p>
                                    </div>     
                                </div>     
                                </li>    
                                <li className="list-group-item">
                                <div className="d-inline-flex">
                                    <div className="icon px-3 py-1">
                                        {faBk}
                                    </div>
                                    <div className="details">
                                        <h6 className="title">
                                            Valtteri Bottas    
                                        </h6>    
                                        <p>
                                            lewis.hamilton@distil.ai. Added 12th December 2020. Last Updated Sent on 1st December 2021 at 23:45 GMT.
                                        </p>
                                    </div>     
                                </div>     
                                </li>  
                                <li className="list-group-item">
                                <div className="d-inline-flex">
                                    <div className="icon px-3 py-1">
                                        {faBk}
                                    </div>
                                    <div className="details">
                                        <h6 className="title">
                                            Sergio Perez  
                                        </h6>    
                                        <p>
                                            lewis.hamilton@distil.ai. Added 12th December 2020. Last Updated Sent on 1st December 2021 at 23:45 GMT.
                                        </p>
                                    </div>     
                                </div>     
                                </li>  
                                <li className="list-group-item">
                                <div className="d-inline-flex">
                                    <div className="icon px-3 py-1">
                                        {faBk}
                                    </div>
                                    <div className="details">
                                        <h6 className="title text-red">
                                            Max Verstappen (Disabled)    
                                        </h6>    
                                        <p>
                                            lewis.hamilton@distil.ai. Added 12th December 2020. Last Updated Sent on 1st December 2021 at 23:45 GMT.
                                        </p>
                                    </div>     
                                </div>     
                                </li>  
                            </ul>                          
                        </div>                                                
                    </div>
                    </div>
                        
                </Col>
            </Row>
        </Container>  
    )
}

export default AnalyticsSubscriber