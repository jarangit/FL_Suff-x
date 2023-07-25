import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function TitleThinkInfo() {
    const [data, setData] = useState([]);
    const { slug } = useParams();

    const getWork = (slugUrl) => {
        const url = `https://www.suffix.works/api-v2/think-info/en?slug=${slugUrl}`;
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
                        <Col lg={{ span: 10, offset: 1 }}>
                            <h3>Think</h3>
                            <h3>{data.category}</h3>
                            <h2>{data.title}</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default TitleThinkInfo;