import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ListThink from './ListThink';


function Think() {
    let params = useParams();
    const { t, i18n } = useTranslation();
   
    const url = "https://www.suffix.works/api-v2/think/"+params.lang+"";

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

    return (
        <section className='sectionListWorks sectionListThink'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        {
                            data.think_info?.map((user, index) => {
                                return <Col lg={6} sm={6} xs={12} key={index} >
                                    <Link to={`/think/${params.lang}/${user.slug}`}>
                                        <div className='ItemListWorks'>
                                            <img src={user.image_webp}></img>
                                            <p>{user.category}</p>
                                            <h2 dangerouslySetInnerHTML={{ __html: user.title.toString().replace(/\r?\n|\r/g, '') }}></h2>
                                        </div>
                                    </Link>
                                    
                                </Col>
                            })
                        }
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Think;