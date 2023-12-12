import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';




function TitleWorksInfo() {
    const [data, setData] = useState([]);
    const [lang, setLang] = useState("en");

    const { slug } = useParams();
    let params = useParams();
    const getWork = (slugUrl) => {
        const selectLang = params.lang;
        const url = `https://www.suffix.works/api-v2/work-detail/${selectLang}?slug=${slugUrl}`;
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
        getWork(slug);
    }, [slug]);

    return (
        <section className='sectionTitlePage sectionTitleWorksInfo'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col lg={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }}>
                            <h3>Client</h3>
                            <h2>
                                {data.title}
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                    <Col lg={{ span: 6, offset: 0 }} xs={12}  md={{ span: 5, offset: 1  }}>
                            <h3>Industry </h3>
                            <h4>{data.industries}</h4>
                        </Col>
                        <Col lg={{ span: 6, offset: 0 }} xs={12}  md={{ span: 5, offset: 0  }}>
                            <h3>Expertise</h3>
                            <h4>{data.category1}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }}>
                            <div className='wrapObjectiveWorks'>
                                <h3>Objective</h3>
                                <h4 dangerouslySetInnerHTML={{ __html: data.objective?.toString().replace(/(<([^>]+)>)/ig, '') }}></h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default TitleWorksInfo;