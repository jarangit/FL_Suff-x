import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from 'react-router-dom';
import { React, useState } from 'react'



function AppHeader() {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <header>
            <section className='sectionHeader'>
                <div className='appHeader'>
                    <div className='wrapLange'>
                        <NavLink>

                        </NavLink>
                        <a>
                            <img src='/images/icon/iconLang.svg'></img>
                            EN
                        </a>
                        <p>
                            |
                        </p>
                        <a>
                            {/* <img src='/images/icon/iconLang.svg'></img> */}
                            TH
                        </a>
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
                                                <li><Link to="/worksInfo">worksInfo</Link></li>
                                                <li>-</li>
                                                <li><Link to="/think">think</Link></li>
                                                <li>-</li>
                                                <li><Link to="/thinkInfo">thinkInfo</Link></li>
                                                <li>-</li>
                                                <li><Link to="/client">client</Link></li>
                                                <li>-</li>
                                                <li><Link to="/culture">culture</Link></li>
                                                <li>-</li>
                                                <li><Link to="/carrers">careers</Link></li>
                                                <li><Link to="/carrersInfo">carrersInfo</Link></li>
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