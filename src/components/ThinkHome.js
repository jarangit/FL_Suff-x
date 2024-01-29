import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import FadeInSection from './animateFadeIn';
// const listThinkHome = [
//     {
//         id: 1,
//         thumbnail: '/images/home/think/1.jpg',
//         title: 'Solve the business problem by gets to the core of how the problems work?'
//     },
//     {
//         id: 2,
//         thumbnail: '/images/home/think/2.jpg',
//         title: "Why your business needs an outsider's point of view? "
//     },
//     {
//         id: 3,
//         thumbnail: '/images/home/think/3.jpg',
//         title: 'Fact-Based Thinking'
//     },

// ]


function ThinkHome() {
    let params = useParams();
    const [data, setData] = useState([]);
    const { t } = useTranslation();
    let { lang } = useParams();
    const url = "https://www.suffix.works/api-v2/home/" + params.lang + "";

    const getWork = () => {
        const config = {
            headers: {
                Authorization: 'Basic c3VmZml4OnN1ZmZpeDIwMjEq',
            }
        };
        return axios.get(url, config)
            .then(res => {
                console.log(res)
                setData(res.data.thinks);
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
            <section className='sectionThinkHome'>
                <FadeInSection>
                    <h3>{t('Think')}</h3>
                </FadeInSection>
                <Container>
                    <Row>
                        {
                            data.map(user => {
                                return <Col lg={4} key={user.id} className='listItemHome'>
                                    <Link to={`/Thoughts/${user.slug}/${params.lang}`}>
                                        <FadeInSection>
                                            <div className='ItemThinkHome'>
                                                <img src={user.image}></img>
                                                {/* <h2>{user.name}</h2> */}
                                                <h2 dangerouslySetInnerHTML={{ __html: user.name.replace(/(<([^>]+)>)/ig, '') }}></h2>
                                                {/* <div dangerouslySetInnerHTML={{ __html: user.name }}></div> */}
                                            </div>
                                        </FadeInSection>
                                    </Link>

                                </Col>
                            })
                        }

                    </Row>
                </Container>
                <Link to={`/Thoughts/${lang}`}>
                    <button> <h3>{t('View Our Thoughts')}</h3></button>
                </Link>
            </section>
        </div>
    );
}

export default ThinkHome;