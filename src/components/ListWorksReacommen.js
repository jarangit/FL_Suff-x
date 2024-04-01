import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import FadeInSection from './animateFadeIn';
import { useTranslation } from 'react-i18next';

function ListWorks() {
    const [data, setData] = useState([]);
    const [lang, setLang] = useState("");
    let { langWorks } = useParams();
    const { slug } = useParams();
    // const { lang } = useParams();
    const { t } = useTranslation();
    let params = useParams();
    const getWork = (slugUrl) => {
        const selectLang = params.lang;
        const url = `https://128.199.72.95/api-v2/work-detail/${selectLang}?slug=${slugUrl}`;
        const config = {
            headers: {
                Authorization: 'Basic c3VmZml4OnN1ZmZpeDIwMjEq',
            }
        };


        return axios.get(url, config)
            .then(res => {
                console.log(res)
                setData(res.data);
                console.log(selectLang);
            })
            .catch(err => console.log(err))
        // return fetch(url)
        //     .then((res) => res.json())
        //     .then((d) => setData(d))
    }

    // const getLang = async (e) => {
    //     const changeLang = e.params.lang;
    //     setLang(changeLang);
    // };

    useEffect(() => {
        getWork(slug);
    }, [slug]);

  

    return (
        <section className='sectionListWorks sectionListWorksRecommen'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col>
                            <Link to={`/works/${params.lang}`}><h3>View All Works</h3></Link>
                        </Col>
                    </Row>
                    <Row>
                        {data.another?.map((user, index) => {
                            return (
                                <Col lg={6} sm={6} xs={12} key={index} className='listItem'>
                                    <FadeInSection>
                                    <Link to={`/works/${user.slug}/${params.lang}`}>
                                        <div className='ItemListWorks'>
                                            <img src={user.thumbnails}></img>
                                            <h2>{user.name}</h2>
                                            <p>{user.category}</p>
                                        </div>
                                    </Link>
                                    </FadeInSection>
                                </Col>
                            );
                        })}
                        
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default ListWorks;