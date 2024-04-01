import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import CountUp from 'react-countup';
import FadeInSection from './animateFadeIn';

function TitlePage() {
    let params = useParams();
    const { t } = useTranslation();
    const url = "https://128.199.72.95/api-v2/works/" + params.lang + "";
    const [data, setData] = useState([]);


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
        <section className='sectionTitlePage'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col>
                            <h3>{t('Works')}</h3>
                            <h2>
                            {data.text}
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default TitlePage;