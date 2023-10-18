import './style.scss';
import i18n from '../i18n.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from 'react-router-dom';
import { React, useState } from 'react'
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import PageWorks from '../PageWorks';

function AppHeader() {
    const { t } = useTranslation();
    const [toggle, setToggle] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isLangActive, setLangIsActive] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
        setIsActive(current => !current);
    };

    let { lang } = useParams();
    console.log(lang);
    // const { i18n } = useTranslation();
    // i18n.changeLanguage(lang);

    const handleChangeLang = (lang) => {
        window.location.href = '/' + lang;

    };


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
            <section className='sectionHeader'>
                <div className='appHeader'>
                    <div className='wrapLange'>
                        {/* <button onClick={() => changeLanguage('en')}>en</button>
                    <button onClick={() => changeLanguage('th')}>th</button> */}

                        <ul>
                            <li> <img src='/images/icon/iconLang.svg'></img> </li>
                            <li><NavLink exact activeClassName="btnLangActive" to='/en' >  EN </NavLink></li>
                            <li> | </li>
                            <li><NavLink activeClassName="btnLangActive" to='/th'> TH</NavLink></li>
                        </ul>

                        {/* <Button className={isLangActive ? 'btnLangActive' : ''} onClick={() => handleChangeLang('en')}> <img src='/images/icon/iconLang.svg'></img>
                            EN
                        </Button>
                        <Button className={isLangActive ? 'btnLangActive' : ''} onClick={() => handleChangeLang('th')}> <img src='/images/icon/iconLang.svg'></img>
                            TH
                        </Button> */}
                    </div>
                    <div className='logo'>
                        <Link to='/'>
                            <img src='/images/logo.svg'></img>
                        </Link>
                    </div>
                    <div className='menuHam'>
                        <div className={isActive ? 'menuHamActive' : ''} onClick={handleClick} >
                            <div className="hambergerBox">
                                <div className="hambergerBar"></div>
                                <div className="hambergerBar"></div>
                                <div className="hambergerBar"></div>
                            </div>
                        </div>
                    </div>
                    {toggle ?
                        <div className='wrapMenuNavigation'>
                            <Container>
                                <Row>
                                    <Col>
                                    </Col>
                                    <Col>
                                        <div className='wrapListMenuNavigation'>
                                            <ul>
                                                <li onClick={handleClick}><Link to={`/works/${lang}`}>works</Link></li>
                                                <li>-</li>
                                                <li onClick={handleClick}><Link to={`/think/${lang}`}>think</Link></li>
                                                <li>-</li>
                                                <li onClick={handleClick}><Link to={`/client/${lang}`}>client</Link></li>
                                                <li>-</li>
                                                <li onClick={handleClick}><Link to={`/culture/${lang}`}>culture</Link></li>
                                                <li>-</li>
                                                <li onClick={handleClick}><Link to={`/careers/${lang}`}>careers</Link></li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        :
                        <></>
                    }

                </div>
            </section>

        </header>
    );
}

export default AppHeader;