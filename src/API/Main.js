import React from 'react';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap'
import FunSignUp from './FunSignUp';
import TelentSignUp from './TelentSignUp';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return <div className='form-section'>
        <Container>
            <Row>
                <Col lg={8} className='mx-auto'>
                    <div className="form">
                        <Tabs defaultActiveKey="telentSignUp" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="telentSignUp" title="Telent SignUp">
                                <TelentSignUp />
                            </Tab>
                            <Tab eventKey="funSignUp" title="Fun SignUp">
                                <FunSignUp />
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
};

export default Main;