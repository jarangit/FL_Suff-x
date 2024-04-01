import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import FadeInSection from './animateFadeIn';


// const listInfoCulture = [
//     {
//         id: 1,
//         imageCultureTop: '/images/workInfo/banner.jpg',
//         thinking:"Solve the problem,then the results speak for themselve.",
//         work:"We are not a team because we work together. We are a team because we respect, trust each other. We rely on Fact-based thinking and everyone can approach & contribute",
//         founder:"SUFFIX is a digital strategy & execution company, Founded in 2010",
//         description:"We provide digital strategic plan, media plan content marketing, social media management, website, e-commerce Working alongside a wide range of clients, from start-ups to public company"
//     }
// ]

function InfoCulture() {
    let params = useParams();
    const { t, i18n } = useTranslation();
    const url = "https://128.199.72.95/api-v2/culture/" + params.lang + "";
    const [data, setData] = useState([]);
    // const [lang, setLang] = useState("en");


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
        <section className='sectionInfoCulture'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col sm={12} lg={{ span: 5, offset: 0 }} md={{ span: 10, offset: 1 }}>
                            <h3>{t('title_Culture')}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} lg={{ span: 5, offset: 0 }} md={{ span: 10, offset: 1 }} className='listItem'>
                            <FadeInSection>
                                <div className='wrapInfoCulture'>
                                    <h3>{t('Thinking')}</h3>
                                    {/* {data.thinking} */}
                                    {/* <div dangerouslySetInnerHTML={{ __html: data.thinking }}></div> */}
                                    <h2 dangerouslySetInnerHTML={{ __html: data.thinking?.toString().replace(/(<([^>]+)>)/ig, '') }}></h2>

                                </div>
                            </FadeInSection>
                        </Col>
                        <Col sm={12} md={{ span: 10, offset: 1 }} lg={{ span: 5, offset: 1 }} className='listItem'>
                            <FadeInSection>
                                <div className='wrapInfoCulture'>
                                    <h3>{t('How we work')}</h3>
                                    {/* {data.work} */}
                                    <h4 dangerouslySetInnerHTML={{ __html: data.work?.toString().replace(/(<([^>]+)>)/ig, '') }}></h4>

                                </div>
                            </FadeInSection>
                        </Col>
                        <Col sm={12}>
                            <FadeInSection>
                                <div className='wrapInfoCulture'>
                                    <img src={data.imageCultureTop}></img>
                                </div>
                            </FadeInSection>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} lg={{ span: 5, offset: 0 }} className='listItem'>
                            <FadeInSection>
                                <div className='wrapInfoCulture wrapInfoCultureBottom'>
                                    <h3>{t('About')}</h3>
                                    {/* {data.founder} */}
                                    <h2 dangerouslySetInnerHTML={{ __html: data.founder?.toString().replace(/(<([^>]+)>)/ig, '') }}></h2>

                                </div>
                            </FadeInSection>
                        </Col>
                        <Col sm={12} lg={{ span: 5, offset: 1 }} className='listItem'>
                            <FadeInSection>
                                <div className='wrapInfoCulture wrapInfoCultureBottom'>
                                    <h3>{t('culture_Expertise')}</h3>
                                    <h4 dangerouslySetInnerHTML={{ __html: data.description }}></h4>
                                    {/* {data.description} */}
                                </div>
                            </FadeInSection>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default InfoCulture;