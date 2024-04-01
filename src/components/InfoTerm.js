import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import FadeInSection from './animateFadeIn';

function InfoPolicy() {
    let params = useParams();
    const { t, i18n } = useTranslation();
    const url = "https://128.199.72.95/api-v2/terms/" + params.lang + "";
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
        <section className='sectionInfoCareers sectionInfoPolicy'>
            <div className='wrapPage'>
                <FadeInSection>
                    <Container >
                        <Row>
                            <Col>
                                <h3>{t('Term of use')}</h3></Col>
                        </Row>
                        <Row>
                            <Col>
                                <p dangerouslySetInnerHTML={{ __html: data.description?.toString().replace(/\r?\n|\r/g, '<br>') }}></p>
                                {/* <div dangerouslySetInnerHTML={{ __html: data.description }}></div> */}
                            </Col>
                        </Row>
                    </Container>
                </FadeInSection>
            </div>
        </section>
    );
}

export default InfoPolicy;