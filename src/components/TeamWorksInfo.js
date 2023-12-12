import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


// const listTeamWorks = [
//     {
//         id: 1,
//         position: 'Account Executive',
//         name: 'Name Surname'
//     },
//     {
//         id: 2,
//         position: 'Designer',
//         name: 'Name Surname'
//     },
//     {
//         id: 3,
//         position: 'Front-end Developer',
//         name: 'Name Surname'
//     },
//     {
//         id: 4,
//         position: 'Front-end Developer',
//         name: 'Name Surname'
//     },
// ]

function TeamWorksInfo() {
   
    const [data, setData] = useState([]);
    const [lang, setLang] = useState("en");

    const { slug } = useParams();

    const getWork = (slugUrl) => {
        const url = `https://www.suffix.works/api-v2/work-detail/en?slug=${slugUrl}`;
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
        getWork(slug);
    }, [slug]);


    return (
        <section className='sectionTeamWorksInfo'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col>
                            <h3>Team</h3>
                            <div className='wrapItemTeamWorks'>
                                {
                                    data.position?.map(user => {
                                        return <Col>
                                            <div className='ItemTeamWorks' key={user.positionName}>
                                                <h3>{user.positionName}</h3>
                                                <h2>{user.fullName}</h2>
                                            </div>
                                        </Col>
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default TeamWorksInfo;