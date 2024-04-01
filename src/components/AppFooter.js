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
    const url = "https://128.199.72.95/api-v2/contact/en";

    const getWork = () => {
        const config = {
            headers: {
                Authorization: 'Basic c3VmZml4OnN1ZmZpeDIwMjEq',
            }
        };
        return axios.get(url, config)
            .then(res => {
                // console.log(res)
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
                        {/* <h2>{t('title_footer')}</h2> */}
                        <h2  dangerouslySetInnerHTML={{ __html: t('title_footer').toString().replace(/(<([^>]+)>)/ig, '<br>') }}></h2>

                    </Col>
                    <Col lg={{ span: 3, offset: 3 }} sm={6} xs={12}>
                    <Link to={`/contact/${lang}`}>
                        <button>{t('Keep in touch')}</button>
                    </Link>
                    </Col>
                    <Col>
                    <hr></hr>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} sm={6} xs={12}>
                        <h3>{t('Address')}</h3>
                        <Link target="_blank" to={'https://www.google.com/maps/place/Building,+15+Floor,+SUFFIX,+T-One,+Unit+15-130+Sukhumvit+40,+Phra+Khanong,+Khlong+Toei,+Bangkok+10110/@13.722344,100.580472,15z/data=!4m6!3m5!1s0x30e29e5343dcafdd:0xd71ac4aa2c33bd01!8m2!3d13.722344!4d100.5804718!16s%2Fg%2F11d_ws3mkd?hl=en&gl=TH'}>
                        <div className='wrapAdressFooter'>
                            <img src="/images/icon/iconMap.svg"></img>
                            <h4>{t('location_footer')}</h4>
                        </div>
                        </Link>
                    </Col>
                    <Col lg={3} sm={6} xs={12}>
                        <h3>{t('Email')}</h3>
                        <Link to={`mailto:${data.email}`}>{data.email}</Link>

                    </Col>
                    <Col lg={3} sm={6} xs={12}>
                        <h3>{t('Telephone')}</h3>
                        <Link to={`tel:${data.telephone}`}>{data.telephone}</Link>

                    </Col>

                    <Col lg={3} sm={6} xs={12}>
                        <h3>{t('Social')}</h3>
                        <div className='wrapSocialFooter'>
                            <ul>
                                <li>
                                    <Link to={data.linkedin_url} target="_blank" rel="noopener noreferrer"><img src="/images/icon/iconLinkedIn.svg"></img></Link>
                                </li>
                                <li>
                                    <Link to={data.instagram_url} target="_blank" rel="noopener noreferrer"><img src="/images/icon/iconIg.svg"></img></Link>
                                </li>
                                <li>
                                    <Link to={data.facebook_url} target="_blank" rel="noopener noreferrer"><img src="/images/icon/iconFB.svg"></img></Link>
                                </li>
                            </ul>
                        </div>
                    </Col>

                </Row>
                <Row className='wrapTermAndCoppyRight'>
                    <Col xs={12} sm={6}>
                        <div className='wrapTermFooter'>
                            <ul>
                                <li><Link to={`/term/${lang}`}>{t('Term of use')}</Link></li>
                                <li> | </li>
                                <li><Link to={`/policy/${lang}`}>{t('Privacy')}</Link></li>
                                <li> | </li>
                                <li><Link  to={`/sitemap/${lang}`}>{t('Sitemap')}</Link></li>
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