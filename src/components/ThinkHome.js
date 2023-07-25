import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";

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
    const url = "https://www.suffix.works/api-v2/home/en";
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
        <div className='wrapPage'>
            <section className='sectionThinkHome'>
                <h3>Think</h3>
                <Container>
                    <Row>
                        {
                            data.thinks?.map(user => {
                                return <Col lg={4} key={user.id}>
                                    <a>
                                        <div className='ItemThinkHome'>
                                            <img src={user.image}></img>
                                            <h2>{user.name}</h2>
                                        </div>
                                    </a>
                                </Col>
                            })
                        }

                    </Row>
                </Container>
                <a>
                    <button>All Client</button>
                </a>
            </section>
        </div>
    );
}

export default ThinkHome;