import React, { useEffect, useRef, useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import axios from 'axios';


function Navbar({ observerRefs }) {

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

    // useEffect(() => {
    //     getWork();
    // }, []);

    const [visibleKey, setVisibleKey] = useState(0);
    const observers = useRef([]);

    const onClick = (item, key) => {
        setVisibleKey(key);
    };

    const observerCallback = async (e, key) => {
        if (e.length && e[0].isIntersecting) {
            setVisibleKey(key);
        }
    };

    // useEffect(() => {
    //     getWork();
    // }, []);

    useEffect(() => {
        getWork();
        if (observerRefs.current?.length && observers.current) {
            Array.from(Array(10).keys()).forEach((_u, key) => {
                observers.current[key] = new IntersectionObserver((e) =>
                    observerCallback(e, key)
                );
                if (observerRefs.current[key]) { 
                    observers.current[key].observe(observerRefs.current[key]);
                }
            });
        }
        return () =>
            observers.current?.forEach((observer) => observer?.current?.disconnect());
    }, [observerRefs, observers]);

   

    return (
        <>
            <div className="wrapPage">
                <section className='sectionWorksHome'>
                    <div className="wrapWorksHome">
                        <Container>
                            <Row>
                                <Col lg={6}>
                                    <div className='wrapTextLeftworksHome'>
                                        <div className='wrapSubTitleWorksHome'>
                                            <h2>{data.work_description}</h2>
                                        </div>
                                        <div className='wrapCaseStudy'>
                                            <h3>Case Study</h3>
                                            <div className='wrapListCaseStudyCase'>
                                                <ul>
                                                    {data.works?.map((tab, i) =>
                                                        <li key={`item-${i}`} id={tab.id}
                                                        className={`tab${i === visibleKey ? " active" : ""}`}
                                                        >{tab.name}</li>
                                                    )}
                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                    {/* <div className="navigation">
                                        <ul>
                                            {items.map((item, key) => {
                                                return (
                                                    <li
                                                        name={item.text.toLowerCase()}
                                                        key={`item-${key}`}
                                                        className={`list${key === visibleKey ? " active" : ""}`}
                                                        onClick={() => onClick(item, key)}
                                                    >
                                                        <a href={`#${item.text.toLowerCase()}`}>
                                                            <span className="icon">{<item.icon />}</span>
                                                            <span className="text">{item.text}</span>
                                                        </a>
                                                    </li>
                                                );
                                            })}
                                            <div className="indicator"></div>
                                        </ul>
                                    </div> */}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>

        </>
    );
}

export default Navbar;
