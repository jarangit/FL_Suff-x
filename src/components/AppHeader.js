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
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
        setIsActive(current => !current);
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
                                                <li onClick={handleClick}><Link to="/project/en">project</Link></li>
                                                <li>-</li>
                                                <li onClick={handleClick}><Link to="/works/en">works</Link></li>
                                                <li>-</li>
                                                <li onClick={handleClick}><Link to="/think/en">think</Link></li>
                                                <li>-</li>
                                                <li onClick={handleClick}><Link to="/client/en">client</Link></li>
                                                <li>-</li>
                                                <li onClick={handleClick}><Link to="/culture/en">culture</Link></li>
                                                <li>-</li>
                                                <li onClick={handleClick}><Link to="/careers/en">careers</Link></li>
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