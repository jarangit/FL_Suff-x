import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const listInfoCulture = [
    {
        id: 1,
        imageCultureTop: '/images/workInfo/banner.jpg',
        thinking:"Solve the problem,then the results speak for themselve.",
        work:"We are not a team because we work together. We are a team because we respect, trust each other. We rely on Fact-based thinking and everyone can approach & contribute",
        founder:"SUFFIX is a digital strategy & execution company, Founded in 2010",
        description:"We provide digital strategic plan, media plan content marketing, social media management, website, e-commerce Working alongside a wide range of clients, from start-ups to public company"
    }
]

function InfoCulture() {
    return (
        <section className='sectionInfoCulture'>
            <div className='wrapPage'>
                {
                    listInfoCulture.map(user => {
                        return <Container key={user.id}>
                            <Row>
                                <Col sm={{ span: 10, offset: 1 }}>
                                    <h3>Culture</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={{ span: 5, offset: 1 }}>
                                    <div className='wrapInfoCulture'>
                                        <h3>Thinking</h3>
                                        <h2>Solve the problem,then the results
                                            speak for themselve.
                                        </h2>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className='wrapInfoCulture'>
                                        <h3>How we work</h3>
                                        <h4>We are not a team because we work together. We are a team because we respect, trust each other. We rely on Fact-based thinking and everyone can approach & contribute
                                        </h4>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='wrapInfoCulture'>
                                        <img src="/images/culture/1.jpg"></img>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                            <Col sm={{ span: 5, offset: 1 }}>
                                    <div className='wrapInfoCulture'>
                                        <h3>Thinking</h3>
                                        <h2>Solve the problem,then the results
                                            speak for themselve.
                                        </h2>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className='wrapInfoCulture'>
                                        <h3>How we work</h3>
                                        <h4>We are not a team because we work together. We are a team because we respect, trust each other. We rely on Fact-based thinking and everyone can approach & contribute
                                        </h4>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    })
                }
            </div>
        </section>
    );
}

export default InfoCulture;