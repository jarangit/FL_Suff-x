import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

function ListWorks() {
    let params = useParams();
    const url = "https://www.suffix.works/api-v2/works/" + params.lang + "";
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

    const [expanded, setExpanded] = useState(false)
    const dataForDisplay = expanded ? data : data.slice(10, 20)

    return (
        <section className='sectionListWorks'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        {
                            dataForDisplay.map(user => {
                                return <Col lg={6} sm={6} xs={12} key={user.id}>
                                    <Link to={`/works/${params.lang}/${user.slug}`}>
                                        <div className='ItemListWorks'>
                                            <img src={user.thumbnails}></img>
                                            <h2>{user.title}</h2>
                                            <p>{user.type}</p>
                                        </div>
                                    </Link>
                                </Col>
                            })
                        }
                        <button type="button" onClick={() => setExpanded(!expanded)}>
                            {expanded ? 'Show Less' : 'Show More'}
                        </button>

                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default ListWorks;