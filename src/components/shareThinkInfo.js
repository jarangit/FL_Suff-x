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

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from 'react-share';

function ShareThinkInfo() {
    const [data, setData] = useState([]);
    const { slug } = useParams();
    let params = useParams();
    const getWork = (slugUrl) => {
        const selectLang = params.lang;
        const url = "https://www.suffix.works/api-v2/think/" + params.lang + "";
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

    const shareUrl = "https://delicate-beignet-5f898e.netlify.app/think/" + slug + "/" + params.lang + "";

    return (
        <section className='sectionTeamWorksInfo sectionShareThinkInfo'>
            <div className='wrapPage'>
                <FadeInSection>
                    <Container>
                        <Row>
                            <Col>
                                <h3>Share</h3>

                                <div className='wrapBtnShareInfoThink'>
                                    <LinkedinShareButton url={shareUrl} className="share-btn">
                                        <img src='../.././images/icon/linkedin.svg' />
                                    </LinkedinShareButton>

                                    <TwitterShareButton url={shareUrl} className="share-btn">
                                        <img src='../.././images/icon/twitter.svg' />
                                    </TwitterShareButton>

                                    <FacebookShareButton
                                        url={shareUrl}
                                        imageURL={data.think_info?.image}
                                        quote={data.title}
                                    >
                                        <img src='../.././images/icon/facebook.svg' />

                                        {/* <FacebookIcon size={40} round={true} /> */}
                                    </FacebookShareButton>
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