import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function TitlePageThink() {
    const [data, setData] = useState([]);
    const [string, setString] = useState([]);
    // const [lang, setLang] = useState("en");

    const { slug } = useParams();

    const getWork = () => {
        const url = `https://www.suffix.works/api-v2/think/en`;
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
        <section className='sectionTitlePage'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col>
                            <h3>Think</h3>
                            <h2 dangerouslySetInnerHTML = {{__html: data.title}}></h2>
                            {/* <h2>
                               {data.title}
                            </h2> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default TitlePageThink;