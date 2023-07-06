import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function TitleWorksInfo() {
    return (
        <section className='sectionTitlePage sectionTitleWorksInfo'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col lg={{ span: 10, offset: 1 }}>
                            <h3>Client</h3>
                            <h2>
                                2 Magazine
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 5, offset: 1 }} xs={12}>
                            <h3>Industry </h3>
                            <h4>Media & Broadcast</h4>
                        </Col>
                        <Col lg={6} xs={12}>
                            <h3>Expertise </h3>
                            <h4>Digital Execution</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 10, offset: 1 }}>
                            <div className='wrapObjectiveWorks'>
                                <h3>Objective</h3>
                                <h4>Create a fun and reader-friendly online magazine whose identity correlates with 2 Magazine’s core character</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default TitleWorksInfo;