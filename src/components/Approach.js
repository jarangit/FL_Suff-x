import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Approach() {
    return (
        <div className='wrapPage'>
            <Container>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <div className='wrapApproach'>
                            <h3>Approach</h3>
                            <h2>
                                Digital project provider and digital service
                            </h2>
                            <h3>Overall</h3>
                            <h2 className='textRun'>
                                251 Works, 67 Digital Strategic Plan, 41 Social Media Management, 42 Media Plan, 105 Websites, 24 Identity Design, 5 Mobile Applications
                            </h2>
                        </div>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>

        </div>
    );
}

export default Approach;