import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const listTeamWorks = [
    {
        id: 1,
        position: 'Account Executive',
        name: 'Name Surname'
    }
]

function WriterThinkInfo() {
    const [data, setData] = useState([]);
    const { slug } = useParams();
    let params = useParams();
    const getWork = (slugUrl) => {
        const selectLang = params.lang;
        const url = `https://www.suffix.works/api-v2/think-info/${selectLang}?slug=${slugUrl}`;
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
        <section className='sectionTeamWorksInfo'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col>
                            <h3>Writer</h3>
                            <div className='wrapItemTeamWorks'>
                                <Col>
                                    <div className='ItemTeamWorks'>
                                        <h3>{data.position}</h3>
                                        <h2>{data.author}</h2>
                                    </div>
                                </Col>
                          
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default WriterThinkInfo;