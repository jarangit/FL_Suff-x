import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import FadeInSection from './animateFadeIn';
import Fade from "@material-ui/core/Fade";
import { useParams } from 'react-router-dom';
import {
    FacebookShareCount,
} from "react-share";
import { ReactTinyLink } from 'react-tiny-link'
import ThinksPost from './ThinksPost';
import { Helmet } from 'react-helmet-async';

// import { Helmet } from "react-helmet";
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


    const regex = /(<([^>]+)>)/gi;
    const titlePage = data.title?.replace(regex, "");
    const title="Learning React Helmet!";
    const description="Beginner friendly page for learning React Helmet.";
    const name= "Company name.";
    const type = "article";
    const image = "https://suffix.works/uploads/uploads/thinks/fdc81cea9b777f0555bb56f5c36393b2.jpg"

    useEffect(() => {
        // document.getElementsByClassName("textInfo").classList.add("hold-transition")
        var elements = document.getElementsByClassName('textInfo');
        for (var i = 0; i < elements.length; i++) {
            //    elements[i].parentElement.classList.add('input-fieldset-awesome');
            elements[i].parentElement.classList.add('input-fieldset-awesome');
        }
    },);
    return (
        <section className='sectionInfoThink'>
            <Helmet>

                {/* <title>{titlePage}</title> */}
                {/* <meta property="og:url" content={data.slugUrl} />
                <meta property="og:type" content={data.type} />
                <meta property="og:title" content={data.title} />
                <meta property="og:description" content={data.desc} />
                <meta property="og:image" content={data.image} />
                <meta name="twitter:image" content={data.image} /> */}

            </Helmet>
            <Helmet>
                { /* Standard metadata tags */}
                <title>{title}</title>
                <meta name='description' content={description} />
                { /* End standard metadata tags */}
                { /* Facebook tags */}
                <meta property="og:type" content={type} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                { /* End Facebook tags */}
                { /* Twitter tags */}
                <meta name="twitter:creator" content={name} />
                <meta name="twitter:card" content={type} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                { /* End Twitter tags */}
            </Helmet>
            <div className='wrapPage'>
                {

                    <Container >
                        <Row>
                            <Col lg={{ span: 10, offset: 1 }}>
                                <FadeInSection>
                                    <img src={data.image}></img>
                                </FadeInSection>
                            </Col>
                            <Col lg={{ span: 10, offset: 1 }}>
                                <FadeInSection>
                                    {/* <p>{data.detail}</p>  */}
                                    <h4>{data.sub_title}</h4>
                                    {/* <p dangerouslySetInnerHTML={{ __html: data.detail.toString().replace(/\r?\n|\r/g, '<br>') }}></p> */}
                                    {/* <p>{data.detail }</p> */}
                                </FadeInSection>

                                <div className='textInfo'
                                    dangerouslySetInnerHTML={{ __html: data.detail }}
                                />
                                {/* <FadeInSection>
                                   
                                  </FadeInSection> */}
                            </Col>
                        </Row>
                    </Container>

                }
            </div>
        </section>
    );
}

export default InfoThink;