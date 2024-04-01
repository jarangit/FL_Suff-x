
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import FadeInSection from './animateFadeIn';

function TitlePageThink() {
    let params = useParams();
    const { t, i18n } = useTranslation();
    const url = "https://128.199.72.95/api-v2/think/" + params.lang + "";
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
        <div className='wrapPage'>
            <Container>
                <Row>
                    <Col>
                        <FadeInSection>
                            <section className='sectionTitlePage'>
                                <h3>{t('Think')}</h3>
                                <h2 dangerouslySetInnerHTML={{ __html: data.title }}></h2>
                            </section>
                        </FadeInSection>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default TitlePageThink;