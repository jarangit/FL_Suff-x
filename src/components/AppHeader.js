import './style.scss';
import i18n from '../i18n.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from 'react-router-dom';
import { React, useState, useCallback } from 'react'
import { useEffect } from "react";
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import PageWorks from '../PageWorks';
import { useCookies } from 'react-cookie';

function AppHeader() {
    const { t } = useTranslation();
    const [toggle, setToggle] = useState(false);
    const [toggleLang, setToggleLang] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isLangActive, setLangIsActive] = useState(false);
    const [isContainerActive, setIsContainerActive] = useState(true);
    const [isContainerTHActive, setIsContainerTh] = useState(false);


    const [y,
        setY] = useState(document.scrollingElement.scrollHeight);
    const [scrollDirection,
        setScrollDirection] = useState("you have not scrolled yet");

    const handleNavigation = useCallback((e) => {

        if (y > window.scrollY) {
            setScrollDirection("Scrolling Up");
            console.log("scrolling up");
            setIsMenuActive(true);
        } else if (y < window.scrollY) {
            setScrollDirection("Scrolling Down");
            console.log("scrolling down");
            setIsMenuActive(false);
        }
        setY(window.scrollY)
    }, [y]);

    const handleClick = () => {
        setToggle(!toggle);
        setIsActive(current => !current);
    };

    const handleClickLangMobile = () => {
        setToggleLang(!toggleLang);
        setLangIsActive(current => !current);
    };

    let { lang } = useParams();
    // console.log(lang);
    // const { i18n } = useTranslation();
    // i18n.changeLanguage(lang);

    const changeLanguage = (lang) => {
        window.location.href = '/' + lang;

    };
    


    // const signUpButton = (lang) => {
    //     setLangIsActive(false);
    //     window.location.href = '/' + lang;
    // };
    // const signInButton = (lang) => {
    //     setLangIsActive(true);
    //     window.location.href = '/' + lang;
    // };
    const signUpButton = () => {
        setIsContainerActive(true);
        window.location.href = '/en';
    };
    const signInButton = () => {
        setIsContainerActive(false);
        window.location.href = '/th';
    };

    // if (lang == 'eng') {
    //     return [

    //     ]
    // } 


    // const setDefaults = (lang, store) => {
    //     // Language specific options
    //     if (lang === 'en') {
    //     //   store.setTimeFormat('24h');
    //     console.log('lang-en');
    //     }
    //     if (lang === 'th') {
    //         console.log('lang-th');
    //     //   store.setTimeFormat('12h');
    //     }
    //     // etc...
    //   };

    // const [isContainerActive, setIsContainerActive] = React.useState(false);

    useEffect(() => {
        if (lang === 'en') {
            //   store.setTimeFormat('24h');
            console.log('lang-en');
            setIsContainerActive(true);
            // setLangIsActive(false);
        }
        if (lang === 'th') {
            console.log('lang-th');
            setIsContainerActive(false);
            // setLangIsActive(true);
            //   store.setTimeFormat('12h');
        }
    }, []);

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);



    // const changeLanguage = (lng) => {
    //     i18n.changeLanguage(lng);
    // }

    // const { i18n } = useTranslation();

    // const handleLanguageChange = (e) => {
    //   const newLang = e.target.value;
    //   i18n.changeLanguage(newLang);
    // };



    return (
        <header>
            <section className={`sectionHeader ${isMenuActive ? 'sectionHeaderActive' : ''}`}>
            {/* <div>{scrollDirection}</div> */}
                <div className='wrapPage'>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <div className='appHeader'>
                                    <div className='wrapLange'>

                                        <div className="header">
                                            <div className="desktopOnly">
                                                <div id="container" className={`containers ${isContainerActive ? " containerEnActive" : ""}`}>
                                                    {/* <button className="ghost" id="signIn" onClick={signInButton}>Sign In</button> */}
                                                    <ul>
                                                        <li> <img src='/images/icon/iconLang.svg'></img> </li>
                                                        <li><NavLink className="thActive thActiveLeft" onClick={signInButton}> TH | </NavLink></li>
                                                        <li><NavLink className="enActive" onClick={signUpButton} > EN </NavLink></li>

                                                        {/* <li> | </li> */}
                                                        <li><NavLink className="thActive" onClick={signInButton}> | TH</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='tabletMobile'>
                                                <div className={`dropdownLangMobile${isLangActive ? " langMobileActive" : ""}`} onClick={handleClickLangMobile} >

                                                    <div id="containerMobile" className={`containerMobile${isContainerActive ? " containerEnActive" : ""}`}>
                                                        <img onClick={signInButton} className='enActive iconLang' src='/images/icon/iconLang.svg'></img>
                                                        <img onClick={signUpButton} className='thActive iconLang' src='/images/icon/iconLang.svg'></img>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='logo'>
                                        <Link to='/'>
                                            <img src='/images/logo.svg'></img>
                                        </Link>
                                    </div>
                                    <input id="page-nav-toggle" class="main-navigation-toggle" type="checkbox" />
                                    <label for="page-nav-toggle">
                                        <svg class="icon--menu-toggle" viewBox="0 0 60 30">
                                            <g class="icon-group">
                                                <g class="icon--menu">
                                                    <path d="M 6 0 L 54 0" />
                                                    <path d="M 6 15 L 54 15" />
                                                    <path d="M 6 30 L 54 30" />
                                                </g>
                                                <g class="icon--close">
                                                    <path d="M 15 0 L 45 30" />
                                                    <path d="M 15 30 L 45 0" />
                                                </g>
                                            </g>
                                        </svg>
                                    </label>

                                    <nav class="main-navigation">
                                        <ul>
                                            <li onClick={handleClick}>
                                                <Link to={`/works/${lang}`}>
                                                    <div className='wrapPage'>
                                                        <Container>
                                                            <Row>
                                                                <Col></Col>
                                                                <Col sm={12} lg={6}>
                                                                    <h1>works</h1>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li onClick={handleClick}>
                                                <Link to={`/client/${lang}`}>
                                                    <div className='wrapPage'>
                                                        <Container>
                                                            <Row>
                                                                <Col></Col>
                                                                <Col sm={12} lg={6}>
                                                                    <h1>client</h1>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li onClick={handleClick}>
                                                <Link to={`/culture/${lang}`}>
                                                    <div className='wrapPage'>
                                                        <Container>
                                                            <Row>
                                                                <Col></Col>
                                                                <Col sm={12} lg={6}>
                                                                    <h1>culture</h1>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li onClick={handleClick}>
                                                <Link to={`/think/${lang}`}>
                                                    <div className='wrapPage'>
                                                        <Container>
                                                            <Row>
                                                                <Col></Col>
                                                                <Col sm={12} lg={6}>
                                                                   <h1>think</h1>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li onClick={handleClick}>
                                                <Link to={`/services/${lang}`}>
                                                    <div className='wrapPage'>
                                                        <Container>
                                                            <Row>
                                                                <Col></Col>
                                                                <Col sm={12} lg={6}>
                                                                    <h1>services</h1>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li onClick={handleClick}>
                                                <Link to={`/careers/${lang}`}>
                                                    <div className='wrapPage'>
                                                        <Container>
                                                            <Row>
                                                                <Col></Col>
                                                                <Col sm={12} lg={6}>
                                                                    <h1>careers</h1>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Link>
                                            </li>


                                            <li onClick={handleClick}>
                                                <Link to={`/contact/${lang}`}>
                                                    <div className='wrapPage'>
                                                        <Container>
                                                            <Row>
                                                                <Col></Col>
                                                                <Col sm={12} lg={6}>
                                                                    <h1>contact</h1>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Link>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <div  className={`spaceMenu ${isMenuActive ? 'spaceMenuActive' : ''}`}></div>
        </header>

    );
}

export default AppHeader;