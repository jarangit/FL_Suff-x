import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function ListSiteMaps() {

    const url = "https://www.suffix.works/api-v2/sitemaps/en";
    const [data, setData] = useState([]);
    const [lang, setLang] = useState("en");



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
                    <h3>Sitemap</h3>
                    <Row className='wrapItemListCareers'>
                        <Col lg={6} sm={12} xs={12}>
                            <div>
                                <h2><Link path='/'>Home</Link></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className='wrapItemListCareers'>
                        <Col lg={6} sm={12} xs={12}>
                            <div>
                                <h2><Link path='/'>Work</Link></h2>
                            </div>
                        </Col>
                        <Col>
                            <ul>
                                {
                                    data.works?.map((index) => {
                                        return <li key={index} className='list'>{index}</li>
                                    })

                                }
                            </ul>
                        </Col>
                    </Row>
                    <Row className='wrapItemListCareers'>
                        <Col lg={6} sm={12} xs={12}>
                            <div>
                                <h2><Link path='/'>Clients</Link></h2>
                            </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row className='wrapItemListCareers'>
                        <Col lg={6} sm={12} xs={12}>
                            <div>
                                <h2><Link path='/'>Culture</Link></h2>
                            </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>

                    <Row className='wrapItemListCareers'>
                        <Col lg={6} sm={12} xs={12}>
                            <div>
                                <h2><Link path='/'>Think</Link></h2>
                            </div>
                        </Col>
                        <Col>
                        <ul>
                                {
                                    data.thinks?.map((index) => {
                                        return <li key={index} className='list'>{index}</li>
                                    })

                                }
                            </ul>
                        </Col>
                    </Row>
                    <Row className='wrapItemListCareers'>
                        <Col lg={6} sm={12} xs={12}>
                            <div>
                                <h2><Link path='/'>Career</Link></h2>
                            </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row className='wrapItemListCareers wrapItemListCareersContact'>
                        <Col lg={6} sm={12} xs={12}>
                            <div>
                                <h2><Link path='/'>Contact</Link></h2>
                            </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default ListSiteMaps;