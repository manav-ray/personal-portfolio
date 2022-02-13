import React, {useRef, useState} from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import database from './../firebase';
import { ref, push, child } from "firebase/database";


import './../styling/main.css';

export default function Contact () {

    const [isValid, setIsValid] = useState(true);
    const [message, setMessage] = useState("");


    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const handleSubmit = () => {

        setIsValid(true);
        setMessage("");

        if (nameRef.current.value === "" || emailRef.current.value === "" || messageRef.current.value === "") {
            setIsValid(false);
            setMessage("Please fill out all sections of the contact form.")
            return;
        }

        push(child(ref(database), '/messages'), { 
            name: nameRef.current.value,
            email: emailRef.current.value,
            messageText: messageRef.current.value
        })

        setIsValid(true);
        setMessage("Message sent succesfully!")

        nameRef.current.value = null;
        emailRef.current.value = null;
        messageRef.current.value = null;
    }

    return (
        <>
            {window.innerWidth > 800 ?
                <div className="dark-container">
                        <Container style={{paddingTop: '5%', paddingBottom: '5%'}}>
                            <Row>
                                <Col>
                                    <h3 style={{paddingBottom: '5%'}}>Contact Me</h3>

                                    {isValid && message !== "" ?
                                        <Alert variant="success">
                                            {message}
                                        </Alert>
                                        :
                                        <>
                                        </>
                                    }

                                    {!isValid && message !== "" ?
                                        <Alert variant="danger">
                                            {message}
                                        </Alert>
                                        :
                                        <>
                                        </>
                                    }
                                    
                                    <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" ref={nameRef} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" ref={emailRef} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} ref={messageRef} />
                                    </Form.Group>
                                    <Button className="btn" onClick={handleSubmit}>Submit</Button>
                                    </Form>

                                </Col>

                                <Col style={{textAlign: 'center'}}>
                                    <h4 style={{paddingTop: '20%', paddingBottom: '2%'}}>Check me out on my socials!</h4>
                                    <InstagramIcon onClick={() => window.open('https://www.instagram.com/manav_ray/?hl=en', '_blank')} className="svg" style={{marginRight: '30px'}} />
                                    <TwitterIcon onClick={() => window.open('https://twitter.com/ray_manav', '_blank')} className="svg" style={{marginRight: '30px'}} />
                                    <GitHubIcon onClick={() => window.open('https://github.com/manav-ray', '_blank')} className="svg" style={{marginRight: '30px'}} />
                                    <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/manav-r-760a39156/', '_blank')} className="svg" />
                                </Col>
                            </Row>
                        </Container>
                </div>
            :
                <div className="dark-container">
                    <Container style={{paddingTop: '5%', paddingBottom: '5%'}}>
                        <Row>
                                <h3 style={{paddingBottom: '5%'}}>Contact Me</h3>

                                {isValid && message !== "" ?
                                    <Alert variant="success">
                                        {message}
                                    </Alert>
                                    :
                                    <>
                                    </>
                                }

                                {!isValid && message !== "" ?
                                    <Alert variant="danger">
                                        {message}
                                    </Alert>
                                    :
                                    <>
                                    </>
                                }
                                
                                <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" ref={nameRef} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" ref={emailRef} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} ref={messageRef} />
                                </Form.Group>
                                <Button className="btn" onClick={handleSubmit}>Submit</Button>
                                </Form>

                        </Row>

                        <Row style={{paddingTop: '10%'}}>
                            <InstagramIcon onClick={() => window.open('https://www.instagram.com/manav_ray/?hl=en', '_blank')} className="svg" style={{height: 'auto', width: '15%', marginLeft: '7%',  marginRight: '30px'}} />
                            <TwitterIcon onClick={() => window.open('https://twitter.com/ray_manav', '_blank')} className="svg" style={{height: 'auto', width: '15%', marginRight: '30px'}} />
                            <GitHubIcon onClick={() => window.open('https://github.com/manav-ray', '_blank')} className="svg" style={{height: 'auto', width: '15%', marginRight: '30px'}} />
                            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/manav-r-760a39156/', '_blank')} style={{height: 'auto', width: '15%'}} className="svg" />
                        </Row>
                    </Container>
                </div>
            }
        </>
    )
}