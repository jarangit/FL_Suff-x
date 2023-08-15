import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function InfoThink() {
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
        <section className='sectionInfoThink'>
            <div className='wrapPage'>
                {

                    <Container >
                        <Row>
                            <Col lg={12}>
                                <img src={data.image_webp}></img>
                            </Col>
                            <Col lg={{ span: 10, offset: 1 }}>
                                {/* <p>{data.detail}</p>  */}
                                <div dangerouslySetInnerHTML={{ __html: data.detail }}></div>

                            </Col>
                            <Col lg={12}>


                            </Col>
                        </Row>
                    </Container>

                }
            </div>
        </section>
    );
}

export default InfoThink;