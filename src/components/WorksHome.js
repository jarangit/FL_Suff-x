import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Router, Routes } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import styled from "styled-components";
import ReactDOM from "react-dom";

import axios from 'axios';
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import Navbar from "./listWorksHome.js";

const divs = [
    {
        "id": 42,
        "image": "https://suffix.works/uploads/uploads/works/76465b38921c6fdd8a110029d4219fac.jpg",
        "image_webp": "https://suffix.works/uploads/uploads/works/2d236a5fb29cdce3ef55579cb74cf035.webp",
        "name": "Buro Ole Scheeren",
        "highlight": "",
        "type": [
            "Execution"
        ],
        "slug": "Buro-Ole-Scheeren"
    },
    {
        "id": 48,
        "image": "https://suffix.works/uploads/uploads/works/c44091347c64196e56308cde65819ae6.jpg",
        "image_webp": "https://suffix.works/uploads/",
        "name": "CUB House by Honda",
        "highlight": "",
        "type": [
            "Strategy",
            "Execution"
        ],
        "slug": "CUB-House-by-Honda"
    },
    {
        "id": 60,
        "image": "https://suffix.works/uploads/uploads/works/8cf3b1d540ba0639f27b89df38f1081a.jpg",
        "image_webp": "https://suffix.works/uploads/",
        "name": "Dusit Central Park",
        "highlight": "",
        "type": [
            "Execution"
        ],
        "slug": "Dusit-Central-Park"
    },
    {
        "id": 67,
        "image": "https://suffix.works/uploads/uploads/works/87a7df49f8ad96bfb3904b824a3d2e9c.jpg",
        "image_webp": "https://suffix.works/uploads/uploads/works/2a74361bddb9d0e82e8772a06af48be9.webp",
        "name": "J.P. Morgan",
        "highlight": "",
        "type": [
            "Execution"
        ],
        "slug": "J-P-Morgan"
    },
    {
        "id": 68,
        "image": "https://suffix.works/uploads/uploads/works/fdf41bccdf1833a9bb4f1390bdef2d0e.webp",
        "image_webp": "https://suffix.works/uploads/uploads/works/35bef4971a0ccaf9e5537999fc385f1f.webp",
        "name": "TIPCO Asphalt",
        "highlight": "",
        "type": [
            "Execution"
        ],
        "slug": "TIPCO-Asphalt"
    }
];

// const divs = [
//     {
//         id: "Home",
//         bgColor: "grey",
//     },
//     {
//         id: "Skills",
//         bgColor: "white",
//     },
//     {
//         id: "Projects",
//         bgColor: "skyblue",
//     },
//     {
//         id: "About",
//         bgColor: "lightgreen",
//     },
//     {
//         id: "Contact",
//         bgColor: "lightsalmon",
//     },
// ];


function WorksHome() {
    // const [list, setList] = useState([])
    // const [active, setActive] = useState(null)



    let params = useParams();
    let { lang } = useParams();
    const { t, i18n } = useTranslation();
    const url = "https://www.suffix.works/api-v2/home/" + params.lang + "";
    const [data, setData] = useState([]);


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


    const [headerColor, setClassPosition] = useState("static")


    const listenScrollEvent = () => {
        window.scrollY > 850 && window.scrollY < 3300
            ? setClassPosition("fixed")
            : setClassPosition("static")
    }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    })


    const observerRefs = useRef([]);

    useEffect(() => {
        console.log(observerRefs.current);
    }, [observerRefs.current]);


    return (
        <div className='wrapPage'>

            <section className='sectionWorksHome'>
                <div className="wrapTitleWorksHome">
                    <h3>Works</h3>
                </div>
                <div className='wrapWorksHome'>
                    {/* <div className='wrapTextLeftworksHome' style={{ position: headerColor }}>
                        <Navbar observerRefs={observerRefs} />
                    </div> */}
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <div >
                                    <div className='wrapSubTitleWorksHome'>
                                        {/* <h2>{data.work_description}</h2> */}
                                    </div>
                                    <Navbar observerRefs={observerRefs} />
                                    {/* <div className='wrapCaseStudy'>
                                        <h3>Case Study</h3>
                                        <div className='wrapListCaseStudyCase'>
                                            <ul>
                                                {data.works?.map((tab, i) =>
                                                    <li key={i} id={tab.id}>{tab.name}</li>
                                                )}
                                            </ul>

                                        </div>
                                    </div> */}

                                </div>
                            </Col>
                            <Col lg={6}>
                                {/* <Navbar observerRefs={observerRefs} /> */}

                                {/* {data.works?.map((tab, key) => {
                                    return (
                                        <div id={tab.id} className='wrapContentCaseStudy'>
                                            <div  className='itemContentCaseStudy'
                                                style={{ height: "420px" }}
                                                >
                                                <div>
                                                    <img src={tab.image}></img>
                                                    <h2 className='title'>{tab.highlight}</h2>
                                                    <h1 ref={(el) => (observerRefs.current[key] = el)}>{tab.id}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })} */}

                                {/* <Navbar observerRefs={observerRefs} /> */}
                                {divs.map((div, key) => {
                                    return (
                                        <div
                                            id={div.id}
                                            style={{ height: "420px", backgroundColor: div.bgColor }}
                                        >
                                            <img src={div.image}></img>
                                            <h1 ref={(el) => (observerRefs.current[key] = el)}>{div.name}</h1>
                                            <Link to={`${lang}/${div.slug}`}>View Project</Link>
                                        </div>
                                    );
                                })}
                            </Col>
                        </Row>
                    </Container>
                    <div className='lineWorskHome'></div>
                </div>
                <Link to={`/works/${lang}`}> <button>View  Our Works</button></Link>
            </section>
        </div>
    );
}


export default WorksHome;