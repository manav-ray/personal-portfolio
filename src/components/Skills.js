import { Container, Row, Col, Button } from 'react-bootstrap';
import './../styling/main.css';

export default function Skills () {

    // Import images:
    const aws = require('./../styling/icons/icons8-amazon-web-services-50.png')
    const c = require('./../styling/icons/icons8-c-50.png')
    const django = require('./../styling/icons/icons8-django-50.png')
    const firebase = require('./../styling/icons/icons8-firebase-50.png')
    const java = require('./../styling/icons/icons8-java-50.png')
    const javascript = require('./../styling/icons/icons8-javascript-50.png')
    const kotlin = require('./../styling/icons/icons8-kotlin-50.png')
    const matlab = require('./../styling/icons/icons8-matlab-50.png')
    const oracle = require('./../styling/icons/icons8-oracle-logo-50.png')
    const python = require('./../styling/icons/icons8-python-50.png')
    const react = require('./../styling/icons/icons8-react-50.png')
    const sql = require('./../styling/icons/icons8-sql-50.png')
    const css = require('./../styling/icons/icons8-css-50.png')
    const git = require('./../styling/icons/icons8-git-50.png')


    return (
        <div>
            <Container style={{paddingTop: '5%'}}>
                <Row>
                    <Col>
                        <h3>Skills and Tools</h3>
                    </Col>
                </Row>

                <Row style={{paddingTop: '2%', textAlign: 'center'}}>
                    <Col/>
                    <Col/>

                    <Col>
                        <img src={python} alt="python"/>
                        <p>Python</p>
                    </Col>
                    <Col>
                        <img src={java} alt="java"/>
                        <p>Java</p>
                    </Col>
                    <Col>
                        <img src={c} alt="c"/>
                        <p>C</p>
                    </Col>
                    <Col>
                        <img src={kotlin} alt="kotlin"/>
                        <p>Kotlin</p>
                    </Col>
                    <Col>
                        <img src={javascript} alt="js"/>
                        <p>JavaScript</p>
                    </Col>
                    <Col>
                        <img src={matlab} alt="matlab"/>
                        <p>MatLab</p>
                    </Col>
                    <Col>
                        <img src={css} alt="css"/>
                        <p>CSS</p>
                    </Col>

                    <Col/>
                    <Col/>

                </Row>

                <Row style={{paddingTop: '2%', textAlign: 'center'}}>
                    <Col/>
                    <Col/>

                    <Col>
                        <img src={firebase} alt="firebase"/>
                        <p>Firebase</p>
                    </Col>
                    <Col>
                        <img src={django} alt="dj"/>
                        <p>Django</p>
                    </Col>
                    <Col>
                        <img src={oracle} alt="oracle"/>
                        <p>Oracle</p>
                    </Col>
                    <Col>
                        <img src={react} alt="react"/>
                        <p>React</p>
                    </Col>
                    <Col>
                        <img src={sql} alt="react"/>
                        <p>SQL</p>
                    </Col>
                    <Col>
                        <img src={aws} alt="aws"/>
                        <p>AWS</p>
                    </Col>
                    <Col>
                        <img src={git} alt="git"/>
                        <p>Git</p>
                    </Col>

                    <Col/>
                    <Col/>

                </Row>
            </Container>

            <div className="center">
                <Button style={{marginBottom: '4%', marginTop: '2%'}} onClick={() => window.open('https://docs.google.com/document/d/1443PhxjnpuwznG3_-XhUqxDnJylSEbscBh0XsE33WhM/edit?usp=sharing', '_blank')} className="btn">Resume</Button>
            </div>
            <div class="slanted-white"/>
        </div>
    )
}