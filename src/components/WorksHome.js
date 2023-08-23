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

function WorksHome() {
    // const [list, setList] = useState([])
    // const [active, setActive] = useState(null)


    const divs = [
        {
            id: "Home",
            bgColor: "grey",
        },
        {
            id: "Skills",
            bgColor: "white",
        },
        {
            id: "Projects",
            bgColor: "skyblue",
        },
        {
            id: "About",
            bgColor: "lightgreen",
        },
        {
            id: "Contact",
            bgColor: "lightsalmon",
        },
    ];

    let params = useParams();
    const { t, i18n } = useTranslation();
    const url = "https://www.suffix.works/api-v2/home/" + params.lang + "";
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


    const [currentTab, setCurrentTab] = useState('1');
    // const tabs = [
    //     {
    //         id: 1,
    //         tabTitle: 'J.P. Morgan',
    //         image: '/images/home/works/1.jpg',
    //         title: "Create Marketing Material for J.P. Morgan",
    //     },
    //     {
    //         id: 2,
    //         tabTitle: 'Dusit Central Park',
    //         image: '/images/home/works/1.jpg',
    //         title: "Create Marketing Material for J.P. Morgan",
    //     },
    //     {
    //         id: 3,
    //         tabTitle: 'TIPCO Asphalt',
    //         image: '/images/home/works/1.jpg',
    //         title: "Create Marketing Material for J.P. Morgan",
    //     },
    //     {
    //         id: 4,
    //         tabTitle: 'CUB house',
    //         image: '/images/home/works/1.jpg',
    //         title: "Create Marketing Material for J.P. Morgan",
    //     },
    //     {
    //         id: 5,
    //         tabTitle: 'First Choice',
    //         image: '/images/home/works/1.jpg',
    //         title: "Create Marketing Material for J.P. Morgan",
    //     }
    // ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

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
                    <div className='wrapTextLeftworksHome' style={{ position: headerColor }}>
                        <Navbar observerRefs={observerRefs} />
                </div>
                    <Container>
                        <Row>
                            <Col lg={6}>
                                {/* <div className='wrapTextLeftworksHome' style={{ position: headerColor }}>
                                    <div className='wrapSubTitleWorksHome'>
                                        <h2>{data.work_description}</h2>
                                    </div>
                                    <Navbar observerRefs={observerRefs} />
                                    <div className='wrapCaseStudy'>
                                        <h3>Case Study</h3>
                                        <div className='wrapListCaseStudyCase'>
                                            <ul>
                                                {data.works?.map((tab, i) =>
                                                    <li key={i} id={tab.id}>{tab.name}</li>
                                                )}
                                            </ul>

                                        </div>

                                    </div>
                                </div> */}
                            </Col>
                            <Col lg={6}>
                                <div className='wrapContentCaseStudy'>
                                    {data.works?.map((tab, i) =>
                                        <div id={tab.id} key={i} className='itemContentCaseStudy'
                                            style={{ height: "420px" }}
                                            ref={(el) => (observerRefs.current[i] = el)}>
                                            <div>
                                                <img src={tab.image}></img>
                                                <h2 className='title'>{tab.highlight}</h2>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* <Navbar observerRefs={observerRefs} />
                                {divs.map((div, key) => {
                                    return (
                                        <div
                                            id={div.id.toLowerCase()}
                                            style={{ height: "420px", backgroundColor: div.bgColor }}
                                        >
                                            <h1 ref={(el) => (observerRefs.current[key] = el)}>{div.id}</h1>
                                        </div>
                                    );
                                })} */}
                            </Col>
                        </Row>
                    </Container>
                    <div className='lineWorskHome'></div>
                </div>
                <a>
                    <button>View  Our Works</button>
                </a>
            </section>
        </div>
    );
}


export default WorksHome;