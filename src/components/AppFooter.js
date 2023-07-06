import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function AppFooter() {
    return (
        <footer className='appFooter'>
            <Container>
                <Row className='wrapTitleFooter'>
                    <Col lg={6}>
                        <h2>Starting a new project or
                            want to collaborate with us?</h2>
                    </Col>
                    <Col lg={{ span: 3, offset: 3 }}>
                        <Button>Get in touch</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <h3>Address</h3>
                        <div className='wrapAdressFooter'>
                            <img src="/images/icon/iconMap.svg"></img>
                            <h4>SUFFIX</h4>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <h3>Email</h3>
                        <Link to="mailto:hi@suffix.works">hi@suffix.works</Link>

                    </Col>
                    <Col lg={3}>
                        <h3>Telephone</h3>
                        <Link to="tel:021852476">+66 21852476</Link>

                    </Col>

                    <Col lg={3}>
                        <h3>Social</h3>
                        <div className='wrapSocialFooter'>
                            <ul>
                                <li>
                                    <Link to="/project"><img src="/images/icon/iconLinkedIn.svg"></img></Link>
                                </li>
                                <li>
                                    <Link to="/project"><img src="/images/icon/iconIg.svg"></img></Link>
                                </li>
                                <li>
                                    <Link to="/project"><img src="/images/icon/iconFB.svg"></img></Link>
                                </li>
                            </ul>
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <div className='wrapTermFooter'>
                            <ul>
                                <li><Link>Term of use</Link></li>
                                <li> | </li>
                                <li><Link>Privacy</Link></li>
                                <li> | </li>
                                <li><Link>Sitemap</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <p> © SUFFIX.,CO.LTD.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default AppFooter;