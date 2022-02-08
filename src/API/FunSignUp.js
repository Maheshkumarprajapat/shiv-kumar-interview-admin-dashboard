import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap'

export default function FunSignUp() {

    const [validated, setValidated] = useState(false);
    const [sign, setSign] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: ""
    })
    const getFormData = (event) => {
        const form = event.currentTarget;
        console.log(sign.first_name, sign.last_name, sign.username, sign.email, sign.password,);

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

    }
    const handleChange = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setSign({ ...sign, [e.target.name]: e.target.value })
    }

    return <section>
        <Container>
            <Row>
                <Col lg={9} md={8} className="mx-auto">
                    <div className="form-tab">
                        <h2 className='heading'>Create Your Fan Account</h2>
                        <div className="form-sec">
                            <Form noValidate validated={validated} onSubmit={getFormData}>
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name *</Form.Label>
                                    <Form.Control type="text" placeholder='FirstName' value={sign.first_name} onChange={onChange} name="first_name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>LastName *</Form.Label>
                                    <Form.Control type="text" placeholder='LastName' value={sign.last_name} onChange={onChange} name="last_name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>UserName</Form.Label>
                                    <Form.Control type="text" placeholder='userName' value={sign.username} onChange={onChange} name="username" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="email" value={sign.email} onChange={onChange} name="email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={sign.password} onChange={onChange} name="password" />
                                </Form.Group>
                                <Form.Group className='check-sec' controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label=" I accept the " />
                                    <a href="/">Terms and Conditions</a>
                                </Form.Group>
                                <Form.Group className="mt-4 text-center">
                                    <button className="btn" type="submit" onClick={handleChange}>Submit</button>
                                    {/* <ToastContainer /> */}
                                </Form.Group>

                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}
