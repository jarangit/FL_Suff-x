import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import FadeInSection from './animateFadeIn';
import { useTranslation } from 'react-i18next';

function ListWorks() {
    let params = useParams();
    const { t, i18n } = useTranslation();
    
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
                setData(res.data.items);
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
    // const dataForDisplay = expanded ? data : data.slice(10, 20)

    const imagePerRow = 10;
    const [next, setNext] = useState(imagePerRow);
    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };

    return (
        <section className='sectionListWorks'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        {data.slice(0, next)?.map((user, index) => {
                            return (
                                <Col lg={6} sm={6} xs={12} key={index} className='listItem'>
                                    <FadeInSection>
                                    <Link to={`/works/${user.slug}/${params.lang}`}>
                                        <div className='ItemListWorks'>
                                            <img src={user.thumbnails}></img>
                                            <h2>{user.title}</h2>
                                            <p>{user.category}</p>
                                        </div>
                                    </Link>
                                    </FadeInSection>
                                </Col>
                            );
                        })}
                        {next < data?.length && (
                            <button
                                className="mt-4"
                                onClick={handleMoreImage}
                            >{t('View More')}</button>
                        )}
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default ListWorks;