import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import { Helmet } from "react-helmet";
import FadeInSection from './animateFadeIn';

import ShareLinkedinComponent from './ShareLinkedinComponent';
import ShareTwitterComponent from './ShareTwitterComponent';
import ShareFacebookComponent from './ShareFacebookComponent';
// import MetaTagComponent from './MetaTagComponent';

function ShareThinkInfo() {
    const [data, setData] = useState([]);
    const { slug } = useParams();
    let params = useParams();
    const getWork = (slugUrl) => {
        const selectLang = params.lang;
        const url = `https://128.199.72.95/api-v2/think-info/${selectLang}?slug=${slugUrl}`;
        const config = {
            headers: {
                Authorization: 'Basic c3VmZml4OnN1ZmZpeDIwMjEq',
            }
        };
        return axios.get(url, config)
            .then(res => {
                // console.log(res)
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

    const setShareUrl = () => {
        let url = "https://128.199.72.95/Thoughts/" + slug + "/" + params.lang + "";
        return url;
    };

    return (
        <section className='sectionTeamWorksInfo sectionShareThinkInfo'>

            <div className='wrapPage'>
                {/* <MetaTagComponent title={data.title} description={data.description} url={setShareUrl()} imageUrl={data?.image} imageAlt={data.title} /> */}
                <FadeInSection>
                    <Container>
                        <Row>
                            <Col>
                                <h3>Share</h3>
                                <div className='wrapBtnShareInfoThink'>
                                    <ShareLinkedinComponent url={setShareUrl()} title={data.title} image={data?.image} />
                                    <ShareTwitterComponent url={setShareUrl()} title={data.title} image={data?.image} />
                                    <ShareFacebookComponent url={setShareUrl()} title={data.title} image={data?.image} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </FadeInSection>
            </div>
        </section>
    );
}

export default ShareThinkInfo;