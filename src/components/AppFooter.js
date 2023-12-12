import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import axios from 'axios';

function AppFooter() {
    let params = useParams();
    const { t, i18n } = useTranslation();
    const [data, setData] = useState([]);
    const [lang, setLang] = useState("en");
    const url = "https://www.suffix.works/api-v2/contact/en";

    const getWork = () => {
        const config = {
            headers: {
                Authorization: 'Basic c3VmZml4OnN1ZmZpeDIwMjEq',
            }
        };
        return axios.get(url, config)
            .then(res => {
                console.log(res)
                setData(res.data);
            })
            .catch(err => console.log(err))
        // return fetch(url)
        //     .then((res) => res.json())
        //     .then((d) => setData(d))
    }

    useEffect(() => {
        getWork();
    }, []);

    return (
        <footer className='appFooter'>
            <Container>
                <Row className='wrapTitleFooter'>
                    <Col lg={6} sm={6} xs={12}>
                        <h2>Starting a new project or <br></br>
                            want to collaborate with us?</h2>
                    </Col>
                    <Col lg={{ span: 3, offset: 3 }} sm={6} xs={12}>
                    <Link to={`/contact/${lang}`}>
                        <button>Keep in touch</button>
                    </Link>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} sm={6} xs={12}>
                        <h3>Address</h3>
                        <div className='wrapAdressFooter'>
                            <img src="/images/icon/iconMap.svg"></img>
                            <h4>SUFFIX</h4>
                        </div>
                    </Col>
                    <Col lg={3} sm={6} xs={12}>
                        <h3>Email</h3>
                        <Link to={`mailto:${data.email}`}>{data.email}</Link>

                    </Col>
                    <Col lg={3} sm={6} xs={12}>
                        <h3>Telephone</h3>
                        <Link to={`tel:${data.telephone}`}>{data.telephone}</Link>

                    </Col>

                    <Col lg={3} sm={6} xs={12}>
                        <h3>Social</h3>
                        <div className='wrapSocialFooter'>
                            <ul>
                                <li>
                                    <Link to={data.linkedin_url}><img src="/images/icon/iconLinkedIn.svg"></img></Link>
                                </li>
                                <li>
                                    <Link to={data.instagram_url}><img src="/images/icon/iconIg.svg"></img></Link>
                                </li>
                                <li>
                                    <Link to={data.facebook_url}><img src="/images/icon/iconFB.svg"></img></Link>
                                </li>
                            </ul>
                        </div>
                    </Col>

                </Row>
                <Row className='wrapTermAndCoppyRight'>
                    <Col xs={12} sm={6}>
                        <div className='wrapTermFooter'>
                            <ul>
                                <li><Link to="/term">Term of use</Link></li>
                                <li> | </li>
                                <li><Link to="/policy">Privacy</Link></li>
                                <li> | </li>
                                <li><Link  to={`/sitemap/${lang}`}>Sitemap</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <p> © SUFFIX.,CO.LTD.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default AppFooter;