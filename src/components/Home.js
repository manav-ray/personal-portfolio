import { Container, Row, Col } from 'react-bootstrap';
import './../styling/main.css';

export default function Home () {

    const profile = require('./../styling/icons/manav_profile.png');

    return (
        <div className="dark-container">
            <Container style={{paddingTop: '5%'}}>
                <Row>
                    <Col />
                    <Col>
                        <img src={profile} alt="Profile" style={{height: "275px", width: "auto", borderRadius: "50%"}} /> 
                    </Col>
                    <Col xs={7}>
                        <h1 style={{fontWeight: "normal"}}>Hello, I am</h1>
                        <h1 style={{fontWeight: "bold"}}>Manav Ray</h1>
                        <div className="style-container">
                            <h4 style={{paddingLeft: '25px', paddingRight: '25px'}}>Full-stack Software Engineer</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div class="slanted-dark"/>
        </div>
    )
}