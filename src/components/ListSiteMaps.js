import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import FadeInSection from './animateFadeIn';


function ListSiteMaps() {
    let params = useParams();

    const url = "https://www.suffix.works/api-v2/sitemaps/" + params.lang + "";
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
                <FadeInSection>
                    <h3>Sitemap</h3>
                    </FadeInSection>
                    <Row className='wrapItemListCareers'>
                        <Col lg={6} sm={12} xs={12}>
                            <div>
                            <FadeInSection>
                                <h2><Link path='/'>Home</Link></h2>
                                </FadeInSection>
                            </div>
                        </Col>
                    </Row>
                    <Row className='wrapItemListCareers'>
                        <Col lg={6} sm={12} xs={12} className='listItem'>
                            <div>
                            <FadeInSection>
                                <h2><Link path='/'>Work</Link></h2>
                                </FadeInSection>
                            </div>
                        </Col>
                        <Col className='listItem'>
                            <ul>
                                {
                                    data.works?.map((index) => {
                                        return      <FadeInSection> <li key={index} className='list'>
                                            <Link to={`/works/${params.lang}/${index.slug}`}>
                                                <p dangerouslySetInnerHTML={{ __html: index.name.replace(/(<([^>]+)>)/ig, '') }}></p>
                                            </Link>
                                            {/* <p dangerouslySetInnerHTML={{ __html: index.replace(/(<([^>]+)>)/ig, '') }}></p> */}
                                        </li>
                                        </FadeInSection>
                                    })

                                }
                            </ul>
                        </Col>
                    </Row>
                    <Row className='wrapItemListCareers'>
                        <Col lg={6} sm={12} xs={12}>
                            <div>
                            <FadeInSection>
                                <h2><Link path='/'>Clients</Link></h2>
                                </FadeInSection>
                            </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row className='wrapItemListCareers'>
                        <Col lg={6} sm={12} xs={12}>
                            <div>
                            <FadeInSection>
                                <h2><Link path='/'>Culture</Link></h2>
                                </FadeInSection>
                            </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>

                    <Row className='wrapItemListCareers'>
                        <Col lg={6} sm={12} xs={12} className='listItem'>
                            <div>
                            <FadeInSection>
                                <h2><Link path='/'>Think</Link></h2>
                                </FadeInSection>
                            </div>
                        </Col>
                        <Col className='listItem'>
                            <ul>
                                {
                                    data.thinks?.map((index) => {
                                        return <FadeInSection><li key={index} className='list'>
                                             <Link to={`/think/${params.lang}/${index.slug}`}>
                                                <p dangerouslySetInnerHTML={{ __html: index.name.replace(/(<([^>]+)>)/ig, '') }}></p>
                                            </Link>
                                        </li>
                                        </FadeInSection> 
                                    })

                                }
                            </ul>
                        </Col>
                    </Row>
                    <Row className='wrapItemListCareers'>
                        <Col lg={6} sm={12} xs={12}>
                            <div>
                            <FadeInSection>
                                <h2><Link path='/'>Career</Link></h2>
                                        </FadeInSection> 
                            </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row className='wrapItemListCareers wrapItemListCareersContact'>
                        <Col lg={6} sm={12} xs={12}>
                            <div>
                            <FadeInSection>
                                <h2><Link path='/'>Contact</Link></h2>
                                </FadeInSection> 
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