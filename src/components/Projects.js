import { Container, Row, Col, Button } from 'react-bootstrap';
import './../styling/main.css';

export default function Projects () {

    const resumedb = require('./../styling/mockups/resumedb.png')
    const visualizer = require('./../styling/mockups/visualizer.png')
    const sorting = require('./../styling/mockups/sorting-visualizer.png')

    return (
        <div className="light-container">
            <Container style={{paddingTop: '5%', paddingBottom: '2%'}}>
                <Row>
                    <Col>
                        <h3>Projects</h3>
                    </Col>
                </Row>

                <Row style={{paddingTop: '2%'}}>
                    <Col/>
                    <Col xs={5}>
                        <h3 style={{color: '#DBADB1'}}>Resume Database</h3>
                        <h5 style={{lineHeight: "1.5"}}>
                            A progressive web application created by myself in a group of
                            five in a capstone course. Made for the Virginia Tech Computer
                            Science department to connect recruiters with students based on
                            desirable skills. The project consists of two seperate websites;
                            one used by recruiters via their work emails, and the other used 
                            by students and administrators using the CAS login system. The 
                            application uses React (Javascript) for the frontend and Django 
                            (python) for the backend.
                        </h5>
                    </Col>
                    <Col>
                        <img src={resumedb} alt="ResumeDB Mockup" style={{height: '350px', width: 'auto'}}/>
                    </Col>
                </Row>

                <Row style={{paddingTop: '2%'}}>
                    <Col/>
                    <Col>
                        <img src={visualizer} alt="Pathfinding Mockup" style={{height: '350px', width: 'auto'}}/>
                    </Col>
                    <Col xs={5}>
                        <h3 style={{color: '#DBADB1'}}>Path finding visualizer</h3>
                        <h5 style={{lineHeight: "1.5"}}>
                            A personal project I created to help computer science students like
                            myself that have trouble visualizing the various shortest path finding
                            algorithms. The application is still a work in progress, with various other
                            algorithms being implemented soon. It is written in React (Javascript) with
                            CSS for the animations.
                        </h5>

                        <br/>

                        <Button onClick={() => window.open('https://manav-ray.github.io/shortest-path-finder/', '_blank')} className="btn">View It Here</Button>
                        <Button onClick={() => window.open('https://github.com/manav-ray/shortest-path-finder', '_blank')} style={{marginLeft: '15px'}} className="btn">Github Repo</Button>

                    </Col>
                </Row>

                <Row style={{paddingTop: '2%'}}>
                    <Col/>
                    <Col xs={5}>
                        <h3 style={{color: '#DBADB1'}}>Sorting Visualizer</h3>
                        <h5 style={{lineHeight: "1.5"}}>
                            One of my earlier personal projects I created to visualize the numerous 
                            sorting algorithms I learned in my Data Structures and Algorithms course.
                            I created this to familiarize myself with React (using Javascript) as well as
                            brushing up on my CSS skills.
                        </h5>

                        <br/>

                        <Button onClick={() => window.open('https://manav-ray.github.io/sorting-visualizer/', '_blank')} className="btn">View It Here</Button>
                        <Button onClick={() => window.open('https://github.com/manav-ray/sorting-visualizer', '_blank')} style={{marginLeft: '15px'}} className="btn">Github Repo</Button>
                    </Col>
                    <Col>
                    <img src={sorting} alt="Sorting Mockup" style={{height: '390px', width: 'auto'}}/>
                    </Col>
                </Row>
                

            </Container>

            <div class="slanted-light"/>
        </div>
    )
}