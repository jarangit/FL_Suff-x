import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from '@mui/material';


import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FadeInSection from './animateFadeIn';
import { useTranslation } from 'react-i18next';
function InfoPolicy() {
    let params = useParams();
    const { t, i18n } = useTranslation();
    const url = "https://www.suffix.works/api-v2/policy/" + params.lang + "";
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
            <FadeInSection>
                <div className='wrapPage'>
                    <Container >
                        <Row>
                            <Col>
                                <h3>{t('Privacy Policy')}</h3></Col>
                        </Row>
                        <Row>
                            <Col>
                                <p dangerouslySetInnerHTML={{ __html: data.description?.toString().replace(/\r?\n|\r/g, '<br>') }}></p>

                             {/* <div dangerouslySetInnerHTML={{ __html: data.description }}></div> */}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </FadeInSection>
        </section>
    );
}

export default InfoPolicy;