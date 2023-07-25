import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

// const listItemCareers = [
//     {
//         id: 1,
//         position: 'UI/UX Designer',
//         desc: 'User Interface, Usability, and Artistic communication are essential ways of providing solutions for clients through visual means.'
//     },
//     {
//         id: 2,
//         position: 'Front-End Developer',
//         desc: 'Don’t underestimate the power of technology for business, especially in this digital age.  '
//     },
// ]


function ListCareers() {
    const url = "https://www.suffix.works/api-v2/career/en";
    const [data, setData] = useState([]);
    const [lang, setLang] = useState("en");



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
    return (
        <section className='sectionListCareers'>
            <div className='wrapPage'>
                <Container>
                    <h3>Careers</h3>
                    {
                        data.map(user => {
                            return <div>
                                <Link to={`/position/${user.id}`}>
                                <Row key={user.id} className='wrapItemListCareers'>
                                    <Col lg={6}>
                                        <div className='ItemListCareers'>
                                            <h3>Position</h3>
                                            <h2>{user.position}</h2>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='ItemListCareers'>
                                            <h3>Why this role important for SUFFIX</h3>
                                            <div dangerouslySetInnerHTML = {{__html: user.description}}></div>
                                        </div>
                                    </Col>
                                </Row>
                                </Link>
                            </div>
                        })
                    }
                </Container>
            </div>
        </section>
    );
}

export default ListCareers;