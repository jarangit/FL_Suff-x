import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";

function InfoPolicy() {
    let params = useParams();
    const { t, i18n } = useTranslation();
    const url = "https://www.suffix.works/api-v2/terms/en";
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
        <section className='sectionInfoCareers'>
            <div className='wrapPage'>
                <Container >
                    <Row>
                        <Col>
                            <h3>Privacy Policy</h3></Col>
                    </Row>
                    <Row>
                        <Col>
                            <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default InfoPolicy;