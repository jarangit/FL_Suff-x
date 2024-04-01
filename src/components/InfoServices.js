import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import { Link, Router, Routes } from 'react-router-dom';
import FadeInSection from './animateFadeIn';

function InfoServices() {
    let params = useParams();
    const { t, i18n } = useTranslation();
    const url = "https://128.199.72.95/api-v2/service/" + params.lang + "";
    const [data, setData] = useState([]);
    // const [lang, setLang] = useState("en");

    let { lang } = useParams();
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
        <section className='sectionInfoServices'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <FadeInSection>
                                <h3>{t('services')}</h3>
                                <h1>{data.text}</h1>
                                {/* <h2 dangerouslySetInnerHTML={{ __html: data.text.toString().replace(/(<([^>]+)>)/ig, '') }}></h2> */}
                                <hr></hr>
                            </FadeInSection>
                        </Col>
                    </Row>
                    {
                        data.items?.map(user => {
                            return <div key={user.id}>
                                <Row className='listServices'>
                                    <Col sm={12} lg={6} className='listItem'>
                                        <FadeInSection>
                                            <div className='wrapInfoServices'>
                                                {/* <h4>{user.text}</h4> */}
                                                <p dangerouslySetInnerHTML={{ __html: user.text.toString().replace(/\r?\n|\r/g, '<br>') }}></p>
                                            </div>
                                        </FadeInSection>
                                    </Col>
                                    <Col sm={12} lg={6} className='listItem'>
                                        <FadeInSection>
                                            <div className='wrapInfoServices'>
                                                <h3>{t('Approach')}</h3>
                                                {/* <h4>{user.Approach}</h4> */}
                                                <p dangerouslySetInnerHTML={{ __html: user.approach.toString().replace(/\r?\n|\r/g, '') }}></p>
                                            </div>
                                        </FadeInSection>
                                    </Col>
                                </Row>
                            </div>

                        })
                    }
                    <Row>

                        <Col sm={12} className='wrapBtn'>
                            <Link to={`/contact/${lang}`}> <button>Get in touch</button></Link>
                        </Col>

                        <Col sm={12} lg={6} className='listItem'>
                            <FadeInSection>
                                <div className='wrapInfoServices'>
                                    <h4 dangerouslySetInnerHTML={{ __html: data.item_footer?.text.toString().replace(/\r?\n|\r/g, '<br>') }}></h4>
                                </div>
                            </FadeInSection>
                        </Col>
                        <Col sm={12} lg={6} className='listItem'>
                            <FadeInSection>
                                <div className='wrapInfoServices'>
                                    <h3>{t('Approach')}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: data.item_footer?.approach.toString().replace(/\r?\n|\r/g, '') }}></p>
                                </div>
                            </FadeInSection>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default InfoServices;