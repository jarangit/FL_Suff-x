import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";

function Approach() {
    let params = useParams();
    const { t, i18n } = useTranslation();
    const url = "https://www.suffix.works/api-v2/home/" + params.lang + "";
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
        <div className='wrapPage'>
            <Container>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <div className='wrapApproach'>
                            <h3>Approach</h3>
                            <h2>
                                <div dangerouslySetInnerHTML={{ __html: data.approach }}></div>
                            </h2>
                            <h3>Overall</h3>
                            <div className='wrapTextApproach'>
                                {
                                    data.overall?.map(user => {
                                        return <div key={user.name} className='wrapArticleApproach'>
                                            <h2 className='textRun'>{user.total}</h2>
                                            <h2 className='textRun'>{user.name}</h2>
                                        </div>

                                    })
                                }
                            </div>
                            {/* <h2 className='textRun'>
                                {data.overall} Works, 67 Digital Strategic Plan, 41 Social Media Management, 42 Media Plan, 105 Websites, 24 Identity Design, 5 Mobile Applications
                            </h2> */}
                        </div>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>

        </div>
    );
}

export default Approach;