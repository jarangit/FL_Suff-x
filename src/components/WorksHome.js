import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Router, Routes } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import styled from "styled-components";
import ReactDOM from "react-dom";
import { useActiveMenu } from "react-active-menu";
// import styles from './style.scss'

import axios from 'axios';
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import WorkDescription from "./listWorksHome.js";

import { useInView } from "react-intersection-observer";
import FadeInSection from './animateFadeIn';


function WorksHome() {
    // const [list, setList] = useState([])
    // const [active, setActive] = useState(null)


    const { ref: sectionRefA, inView: sectionRefAIsVisible } = useInView();
    const { ref: sectionRefB, inView: sectionRefBIsVisible } = useInView();
    const { ref: sectionRefC, inView: sectionRefCIsVisible } = useInView();
    const { ref: sectionRefD, inView: sectionRefDIsVisible } = useInView();
    const { ref: sectionRefE, inView: sectionRefEIsVisible } = useInView();


    const { ref: sectionRefTitle, inView: sectionRefTitleIsVisible } = useInView();
    const scrolltoA = () => document.getElementById('sectionA');
    const scrolltoB = () => document.getElementById('sectionB');
    const scrolltoC = () => document.getElementById('sectionC');
    const scrolltoD = () => document.getElementById('sectionD');
    const scrolltoE = () => document.getElementById('sectionE');

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
                setData(res.data.works);
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
        window.scrollY > 850 && window.scrollY < 1500
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

    const { registerContainer, registerSection, registerTrigger } = useActiveMenu(
        {
            smooth: true
        }
    );


    // const handleScroll = (e: React.UIEvent) => {
    //     if(e.currentTarget.scrollTop === 0) {
    //       console.log("topp")
    //     }
    // } 
    return (
        <div className='wrapPage'>
            {/* <section className='sectionWorksHome' style={{ position: headerColor }}> */}
            <section className='sectionWorksHome'>
                {/* <div className='sectionE' ></div> */}
                <div className="wrapTitleWorksHome">

                    <Container>
                        <Row>
                            <Col >
                                <h3>{t('Works')}</h3>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='wrapWorksHome'>
                    <Container>
                        <Row>
                            <Col sm={12} lg={6} >
                                <div className={`wrapTextworksHome ${sectionRefTitleIsVisible ? 'textWorksActive' : ''}`}>
                                    <div className='wrapSubTitleWorksHome'>
                                        {/* <h2>{data.work_description}</h2> */}
                                        <WorkDescription observerRefs={observerRefs} />
                                    </div>
                                    
                                    <div className="triggers">
                                        <h3>{t('Case Study')}</h3>
                                        <ul>
                                            <li onClick={() => { scrolltoA().scrollIntoView({ block: "start", behavior: "smooth" }) }}>
                                                <button type="button" className={`list ${sectionRefAIsVisible ? 'listActive' : ''} `}>
                                                    {data.map((data, index) => {
                                                        if (index === 0) {
                                                            return <li key={index}>{data.name}</li>;
                                                        }
                                                        return null;
                                                    })}
                                                </button>
                                            </li>
                                            <li onClick={() => { scrolltoB().scrollIntoView({ block: "start", behavior: "smooth" }) }}>
                                                <button type="button" className={`list ${sectionRefBIsVisible ? 'listActive' : ''}`}>
                                                    {data.map((data, index) => {
                                                        if (index === 1) {
                                                            return <li key={index}>{data.name}</li>;
                                                        }
                                                        return null;
                                                    })}
                                                </button>
                                            </li>
                                            <li onClick={() => { scrolltoC().scrollIntoView({ block: "start", behavior: "smooth" }) }}>
                                                <button type="button" className={`list ${sectionRefCIsVisible ? 'listActive' : ''}`}>
                                                    {data.map((data, index) => {
                                                        if (index === 2) {
                                                            return <li key={index}>{data.name}</li>;
                                                        }
                                                        return null;
                                                    })}
                                                </button>
                                            </li>
                                            <li onClick={() => { scrolltoD().scrollIntoView({ block: "start", behavior: "smooth" }) }}>
                                                <button type="button" className={`list ${sectionRefDIsVisible ? 'listActive' : ''}`}>
                                                    {data.map((data, index) => {
                                                        if (index === 3) {
                                                            return <li key={index}>{data.name}</li>;
                                                        }
                                                        return null;
                                                    })}
                                                </button>
                                            </li>
                                            <li onClick={() => { scrolltoE().scrollIntoView({ block: "start", behavior: "smooth" }) }}>
                                                <button type="button" className={`list ${sectionRefEIsVisible ? 'listActive' : ''}`}>
                                                    {data.map((data, index) => {
                                                        if (index === 4) {
                                                            return <li key={index}>{data.name}</li>;
                                                        }
                                                        return null;
                                                    })}
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </Col>
                            <Col sm={12} lg={6}>
                                <div className="sections" ref={registerContainer} >
                                    <section>
                                        <FadeInSection>
                                            <Col lg={{ span: 10, offset: 0 }} md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 0 }}>
                                                <div ref={sectionRefA} id="sectionA" className={`sectionA list`}></div>
                                                {data.map((data, index) => {
                                                    if (index === 0) {
                                                        return (
                                                            <div key={index}
                                                                id={data.slug.toLowerCase()}>
                                                                {/* <img src={div[0].data.image}></img> */}

                                                                <div className='listWorksHomes'>
                                                                    <img src={data.image}></img>
                                                                    <Link to={`/works/${data.slug}/${lang}`}><h1 dangerouslySetInnerHTML={{ __html: data.name.replace(/(<([^>]+)>)/ig, '') }}></h1></Link>
                                                                    <Link to={`/works/${data.slug}/${lang}`}><h1 dangerouslySetInnerHTML={{ __html: data.highlight.replace(/(<([^>]+)>)/ig, '') }}></h1></Link>


                                                                    <Link to={`/works/${data.slug}/${lang}`}>View Project</Link>                                                    </div>
                                                            </div>
                                                        );
                                                    }
                                                    return null;

                                                })}
                                            </Col>
                                        </FadeInSection>
                                    </section>
                                    <section>
                                        <FadeInSection>
                                            <Col lg={{ span: 10, offset: 2 }} md={{ span: 8, offset: 4 }} xs={{ span: 10, offset: 2 }}>
                                                <div ref={sectionRefB} id="sectionB" className={`list `}></div>
                                                {data.map((data, index) => {
                                                    if (index === 1) {
                                                        return (
                                                            <div key={index}
                                                                id={data.slug.toLowerCase()}>
                                                                {/* <img src={div[0].data.image}></img> */}

                                                                <div className='listWorksHomes'>
                                                                    <img src={data.image}></img>
                                                                    <Link to={`/works/${data.slug}/${lang}`}><h1 dangerouslySetInnerHTML={{ __html: data.name.replace(/(<([^>]+)>)/ig, '') }}></h1></Link>
                                                                    <Link to={`/works/${data.slug}/${lang}`}><h1 dangerouslySetInnerHTML={{ __html: data.highlight.replace(/(<([^>]+)>)/ig, '') }}></h1></Link>


                                                                    <Link to={`/works/${data.slug}/${lang}`}>View Project</Link>                                                      </div>
                                                            </div>
                                                        );
                                                    }
                                                    return null;

                                                })}
                                            </Col>
                                        </FadeInSection>
                                    </section>
                                    <section>
                                        <FadeInSection>
                                            <Col lg={{ span: 10, offset: 0 }} md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 0 }}>
                                                <div ref={sectionRefC} id="sectionC" className={`list`}></div>
                                                {data.map((data, index) => {
                                                    if (index === 2) {
                                                        return (
                                                            <div key={index}
                                                                id={data.slug.toLowerCase()}>
                                                                {/* <img src={div[0].data.image}></img> */}

                                                                <div className='listWorksHomes'>
                                                                    <img src={data.image}></img>
                                                                    <Link to={`/works/${data.slug}/${lang}`}><h1 dangerouslySetInnerHTML={{ __html: data.name.replace(/(<([^>]+)>)/ig, '') }}></h1></Link>
                                                                    <Link to={`/works/${data.slug}/${lang}`}><h1 dangerouslySetInnerHTML={{ __html: data.highlight.replace(/(<([^>]+)>)/ig, '') }}></h1></Link>


                                                                    <Link to={`/works/${data.slug}/${lang}`}>View Project</Link>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                    return null;

                                                })}
                                            </Col>
                                        </FadeInSection>
                                    </section>
                                    <section>
                                        <FadeInSection>
                                            <Col lg={{ span: 10, offset: 2 }} md={{ span: 8, offset: 4 }} xs={{ span: 10, offset: 2 }}>
                                                <div ref={sectionRefD} id="sectionD" className={`list`}></div>
                                                {data.map((data, index) => {
                                                    if (index === 3) {
                                                        return (
                                                            <div key={index}
                                                                id={data.slug.toLowerCase()}>
                                                                {/* <img src={div[0].data.image}></img> */}

                                                                <div className='listWorksHomes'>
                                                                    <img src={data.image}></img>
                                                                    <Link to={`/works/${data.slug}/${lang}`}><h1 dangerouslySetInnerHTML={{ __html: data.name.replace(/(<([^>]+)>)/ig, '') }}></h1></Link>
                                                                    <Link to={`/works/${data.slug}/${lang}`}><h1 dangerouslySetInnerHTML={{ __html: data.highlight.replace(/(<([^>]+)>)/ig, '') }}></h1></Link>


                                                                    <Link to={`/works/${data.slug}/${lang}`}>View Project</Link>                                                 </div>
                                                            </div>
                                                        );
                                                    }
                                                    return null;

                                                })}
                                            </Col>
                                        </FadeInSection>
                                    </section>
                                    <Col lg={{ span: 10, offset: 0 }} md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 0 }}>
                                        <FadeInSection>
                                            <section className='sectionE' id="sectionE" ref={sectionRefE}>
                                                {/* <div className='sectionE' ref={sectionRefE}></div> */}
                                                {data.map((data, index) => {
                                                    if (index === 4) {
                                                        return (
                                                            <div key={index}
                                                                id={data.slug.toLowerCase()}>
                                                                {/* <img src={div[0].data.image}></img> */}

                                                                <div className='listWorksHomes'>
                                                                    <img src={data.image}></img>
                                                                    <Link to={`/works/${data.slug}/${lang}`}><h1 dangerouslySetInnerHTML={{ __html: data.name.replace(/(<([^>]+)>)/ig, '') }}></h1></Link>
                                                                    <Link to={`/works/${data.slug}/${lang}`}><h1 dangerouslySetInnerHTML={{ __html: data.highlight.replace(/(<([^>]+)>)/ig, '') }}></h1></Link>


                                                                    <Link to={`/works/${data.slug}/${lang}`}>View Project</Link>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                    return null;

                                                })}
                                            </section>
                                        </FadeInSection>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className='wrapTextLeftworksHome'>
                        {/* <Navbar observerRefs={observerRefs} /> */}
                    </div>
                    <div className='lineWorskHome'></div>
                </div>
                <Link to={`/works/${lang}`}> <button>{t('View Our Works')}</button></Link>
            </section>
        </div>
    );
}


export default WorksHome;