import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import FadeInSection from './animateFadeIn';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';


function ListClient() {
    let params = useParams();
    const selectLang = params.lang;
    const url = `https://www.suffix.works/api-v2/client/${selectLang}`;
    const [data, setData] = useState([]);
  
    const [lang, setLang] = useState("en");
    const { t } = useTranslation();


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
        <section className='sectionListCareers'>
            <div className='wrapPage'>
                <Container>
                    <FadeInSection>
                        <h3>{t('client_menu')}</h3>
                        <h1>{data.title}</h1>
                        <h3>{t('Client List')}</h3>
                    </FadeInSection>
                    {
                        data.industries?.map((industrie, index) => {
                            return <Row className='wrapItemListCareers'>
                                    <Col lg={6} sm={6} xs={12} className='listItem'>
                                        <FadeInSection>
                                            <div key={industrie.name} className='ItemListCareers'>
                                                <h2>{industrie.name}</h2>
                                            </div>
                                        </FadeInSection>
                                    </Col>

                                    <Col lg={6} sm={6} xs={12} className='listItem'>
                                        <FadeInSection>
                                            <div className='ItemListCareers'>
                                                <ul>

                                                    {
                                                        industrie.client.map((index) => {
                                                            return <li key={index} className='list'>{index}</li>
                                                        })

                                                    }
                                                </ul>
                                            </div>
                                        </FadeInSection>
                                    </Col>

                                </Row>
                        })
                    }
                </Container>
            </div>
        </section>
    );
}

export default ListClient;