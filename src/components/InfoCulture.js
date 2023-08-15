import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";


// const listInfoCulture = [
//     {
//         id: 1,
//         imageCultureTop: '/images/workInfo/banner.jpg',
//         thinking:"Solve the problem,then the results speak for themselve.",
//         work:"We are not a team because we work together. We are a team because we respect, trust each other. We rely on Fact-based thinking and everyone can approach & contribute",
//         founder:"SUFFIX is a digital strategy & execution company, Founded in 2010",
//         description:"We provide digital strategic plan, media plan content marketing, social media management, website, e-commerce Working alongside a wide range of clients, from start-ups to public company"
//     }
// ]

function InfoCulture() {
    let params = useParams();
    const { t, i18n } = useTranslation();
    const url = "https://www.suffix.works/api-v2/culture/" + params.lang + "";
    const [data, setData] = useState([]);
    // const [lang, setLang] = useState("en");


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
        <section className='sectionInfoCulture'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col sm={{ span: 10, offset: 1 }}>
                            <h3>Culture</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 5, offset: 1 }}>
                            <div className='wrapInfoCulture'>
                                <h3>Thinking</h3>
                                {/* {data.thinking} */}
                                <div dangerouslySetInnerHTML={{ __html: data.thinking }}></div>

                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='wrapInfoCulture'>
                                <h3>How we work</h3>
                                {/* {data.work} */}
                                <div dangerouslySetInnerHTML={{ __html: data.work }}></div>

                            </div>
                        </Col>
                        <Col>
                            <div className='wrapInfoCulture'>
                                <img src={data.imageCultureTop}></img>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 5, offset: 1 }}>
                            <div className='wrapInfoCulture'>
                                <h3>Thinking</h3>
                                {/* {data.founder} */}
                                <p dangerouslySetInnerHTML={{ __html: data.founder }}></p>

                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='wrapInfoCulture'>
                                <h3>How we work</h3>
                                <h4 dangerouslySetInnerHTML={{ __html: data.description }}></h4>
                                {/* {data.description} */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default InfoCulture;