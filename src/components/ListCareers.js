import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import FadeInSection from './animateFadeIn';
import { useTranslation } from 'react-i18next';

// const listItemCareers = [
//     {
//         id: 1,
//         position: 'UI/UX Designer',
//         desc: 'User Interface, Usability, and Artistic communication are essential ways of providing solutions for clients through visual means.'
//     },
//     {
//         id: 2,
//         position: 'Front-End Developer',
//         desc: 'Don’t underestimate the power of technology for business, especially in this digital age.  '
//     },
// ]


function ListCareers() {
    let params = useParams();
    const { t, i18n } = useTranslation();
    const url = "https://www.suffix.works/api-v2/career/" + params.lang + "";
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
                        <h3>{t('careers')}</h3>
                    </FadeInSection>
                    {
                        data.map(user => {
                            return <div key={user.id}>
                                <Link to={`/position/${user.id}/${params.lang}`}>
                                    <Row className='wrapItemListCareers'>
                                        <Col lg={6} className='listItem'>
                                            <FadeInSection>
                                                <div className='ItemListCareers'>
                                                    <h3>{t('Position')}</h3>
                                                    <h2>{user.position}</h2>
                                                </div>
                                            </FadeInSection>
                                        </Col>
                                        <Col lg={6} className='listItem'>
                                            <FadeInSection>
                                                <div className='ItemListCareers'>
                                                    <h3>{t('Why this role important for SUFFIX')}</h3>
                                                    <div dangerouslySetInnerHTML={{ __html: user.description }}></div>
                                                </div>
                                            </FadeInSection>
                                        </Col>
                                    </Row>
                                </Link>
                            </div>
                        })
                    }
                </Container>
            </div>
        </section>
    );
}

export default ListCareers;