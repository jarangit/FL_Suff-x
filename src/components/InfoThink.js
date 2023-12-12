import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {
    FacebookShareCount,
} from "react-share";
import { ReactTinyLink } from 'react-tiny-link'

import { Helmet } from "react-helmet";
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

    function createMarkup() {
        return {
            __html: data.detail
        };
    };

    return (
        <section className='sectionInfoThink'>
            {/* <Helmet>
                <title>{data.title}</title>
                <meta property="og:url" content={ogUrl} />
                <meta property="og:type" content={props.type} />
                <meta property="og:title" content={data.title} />
                <meta property="og:title" content="Updated!!" />

                <meta property="og:description" content={props.desc} />
                <meta property="og:image" content={data.image_webp} />
            </Helmet> */}
            <div className='wrapPage'>
                {

                    <Container >
                        <Row>
                            <Col lg={{ span: 10, offset: 1 }}>
                                <img src={data.image_webp}></img>
                            </Col>
                            <Col lg={{ span: 10, offset: 1 }}>
                                {/* <p>{data.detail}</p>  */}
                                <h4>{data.sub_title}</h4>
                                {/* <p dangerouslySetInnerHTML={{ __html: data.detail.toString().replace(/\r?\n|\r/g, '<br>') }}></p> */}
                                {/* <p>{data.detail }</p> */}
                                <div
                                    dangerouslySetInnerHTML={{ __html: data.detail }}
                                />
                                {/* <div dangerouslySetInnerHTML={{ __html: createMarkup }}></div> */}
                            </Col>
                        </Row>
                    </Container>

                }
            </div>
        </section>
    );
}

export default InfoThink;