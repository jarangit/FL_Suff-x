import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import FadeInSection from './animateFadeIn';
import { useTranslation } from 'react-i18next';

function TitleThinkInfo() {
    const [data, setData] = useState([]);
    const { slug } = useParams();
    const { t, i18n } = useTranslation();
    let params = useParams();

    const getWork = (slugUrl) => {
        const selectLang = params.lang;
        const url = `https://128.199.72.95/api-v2/think-info/${selectLang}?slug=${slugUrl}`;
        const config = {
            headers: {
                Authorization: 'Basic c3VmZml4OnN1ZmZpeDIwMjEq',
                // 'Content-Type': 'application/json'
            },
            // body: JSON.stringify(data)

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
        getWork(slug);
    }, [slug]);

    return (
        <section className='sectionTitlePage sectionTitleWorksInfo sectionTitleThinkInfo'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col lg={{ span: 10, offset: 1 }}>
                            <FadeInSection>
                                <h3>{t('Think')}</h3>
                                <h3 className='titleCate'>{data.category}</h3>
                                {/* <h2>{JSON.stringify(data.title)}</h2> */}
                                <h2 id="title" dangerouslySetInnerHTML={{ __html: data.title?.replace(/(<([^>]+)>)/ig, '') }}></h2>
                                {/* <div className='titleWorkInfo' dangerouslySetInnerHTML={{ __html: data.title.replace(/(<([^>]+)>)/ig, '') }}></div> */}
                            </FadeInSection>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default TitleThinkInfo;