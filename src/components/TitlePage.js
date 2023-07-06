import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function TitlePage() {
    return (
        <section className='sectionTitlePage'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col>
                            <h3>Works</h3>
                            <h2>
                                Explore our case studies to see how we can bring a fresh solution to your business.
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default TitlePage;