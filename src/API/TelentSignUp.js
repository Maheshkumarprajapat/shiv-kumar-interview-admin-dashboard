import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TelentSignUp() {
    const [validated, setValidated] = useState(false);

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getFormData = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }
    const handleChange = (e) => {
        e.preventDefault();
        if (firstname, lastname, username, email, password) {
            toast.success('Your data is successful', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            fetch('http://localhost:3000/talent', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstname, lastname, username, email, password })
            })
                .then((result) => {
                    result.json().then((response) => {
                        console.log(response);
                    })
                })
        }
        else {
            toast.error('Please required your Message', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        setFirstName("");
        setLastName("");
        setUsername("");
        setEmail("");
        setPassword("");
    }

    return <section>
        <Container>
            <Row>
                <Col lg={9} md={9} className="mx-auto">
                    <div className="form-tab">
                        <h1 className='heading'>React <span>&</span> Form</h1>
                        <div className="form-sec">
                            <Form noValidate validated={validated} onSubmit={getFormData}>
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name *</Form.Label>
                                    <Form.Control type="text" placeholder='FirstName' value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>LastName *</Form.Label>
                                    <Form.Control type="text" placeholder='LastName' value={lastname} onChange={(e) => setLastName(e.target.value)} required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>UserName</Form.Label>
                                    <Form.Control type="text" placeholder='userName' value={username} onChange={(e) => setUsername(e.target.value)} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                                </Form.Group>
                                <Form.Group className='check-sec' controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label=" I accept the " />
                                    <a href="/">Terms and Conditions</a>
                                </Form.Group>
                                <Form.Group className="mt-4 text-center">
                                    <button className="btn" type="submit" onClick={handleChange}>Submit</button>
                                    <ToastContainer />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}
