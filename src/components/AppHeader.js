import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from 'react-router-dom';
import { React, useState } from 'react'
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';


function AppHeader() {
    const { t } = useTranslation();
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    };

    const handleChangeLang = (lang) => {
        window.location.href = '/' + lang;
    };
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
                        {/* {t('Travel App')} */}
                        <Button onClick={() => handleChangeLang('en')}> <img src='/images/icon/iconLang.svg'></img>
                            EN</Button>
                        <Button onClick={() => handleChangeLang('th')}> <img src='/images/icon/iconLang.svg'></img>
                            TH</Button>
                    </div>
                    <div className='logo'>
                        <Link to='/'>
                            <img src='/images/logo.svg'></img>
                        </Link>
                    </div>
                    <div className='menuHam'>
                        <div className="hambergerBox" onClick={handleClick} >
                            <div className="hambergerBar"></div>
                            <div className="hambergerBar"></div>
                            <div className="hambergerBar"></div>
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
                                                <li><Link to="/project">project</Link></li>
                                                <li>-</li>
                                                <li><Link to="/works">works</Link></li>
                                                <li>-</li>
                                                <li><Link to="/think">think</Link></li>
                                                <li>-</li>
                                                <li><Link to="/client">client</Link></li>
                                                <li>-</li>
                                                <li><Link to="/culture">culture</Link></li>
                                                <li>-</li>
                                                <li><Link to="/careers">careers</Link></li>
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