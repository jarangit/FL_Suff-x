import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Router, Routes } from 'react-router-dom';
import { React, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';



function WorksHome() {
    // const [list, setList] = useState([])
    // const [active, setActive] = useState(null)
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'J.P. Morgan',
            image: '/images/home/works/1.jpg',
            title: "Create Marketing Material for J.P. Morgan",
        },
        {
            id: 2,
            tabTitle: 'Dusit Central Park',
            image: '/images/home/works/1.jpg',
            title: "Create Marketing Material for J.P. Morgan",
        },
        {
            id: 3,
            tabTitle: 'TIPCO Asphalt',
            image: '/images/home/works/1.jpg',
            title: "Create Marketing Material for J.P. Morgan",
        },
        {
            id: 4,
            tabTitle: 'CUB house',
            image: '/images/home/works/1.jpg',
            title: "Create Marketing Material for J.P. Morgan",
        },
        {
            id: 5,
            tabTitle: 'First Choice',
            image: '/images/home/works/1.jpg',
            title: "Create Marketing Material for J.P. Morgan",
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }


    return (
        <div className='wrapPage'>
            <div className='tabs'>

            </div>
            <div className='content'>

            </div>
            <section className='sectionWorksHome'>
                <div className="wrapTitleWorksHome">
                    <h3>Works</h3>
                </div>
                <div className='wrapWorksHome'>
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <div className='wrapSubTitleWorksHome'>
                                    <h2>We provide digital strategy & execution including marketing,communication,website ,application.</h2>
                                </div>
                                <div className='wrapCaseStudy'>
                                    <h3>Case Study</h3>
                                    <div className='wrapListCaseStudyCase'>
                                        {tabs.map((tab, i) =>
                                            <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>
                                                {tab.tabTitle}
                                            </button>
                                        )}
                                    </div>

                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className='wrapContentCaseStudy'>
                                    {tabs.map((tab, i) =>
                                        <div key={i}>
                                            {currentTab === `${tab.id}` && <div>
                                                <img src={tab.image}></img>
                                                <h2 className='title'>{tab.title}</h2>
                                            </div>}
                                        </div>
                                    )}
                                </div>
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