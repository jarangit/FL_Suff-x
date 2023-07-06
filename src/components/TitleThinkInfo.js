import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function TitleThinkInfo() {
    return (
        <section className='sectionTitlePage sectionTitleWorksInfo'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col lg={{ span: 10, offset: 1 }}>
                            <h3>Think</h3>
                            <h3>Business</h3>
                            <h2>
                            Solve the business problem by gets to the core of how the problems work
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default TitleThinkInfo;