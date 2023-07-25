import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



// const listClientsHome = [
//     {
//         id: 1,
//         thumbnail: '/images/works/1.jpg',
//         title: 'UP & UNDER',
//         catagory: 'Execution',
//         slug:''
//     },
//     {
//         id: 2,
//         thumbnail: '/images/works/2.jpg',
//         title: 'UP & UNDER',
//         catagory: 'Execution'
//     },
//     {
//         id: 3,
//         thumbnail: '/images/works/3.jpg',
//         title: 'UP & UNDER',
//         catagory: 'Execution'
//     },
//     {
//         id: 4,
//         thumbnail: '/images/works/4.jpg',
//         title: 'UP & UNDER',
//         catagory: 'Execution'
//     },
//     {
//         id: 5,
//         thumbnail: '/images/works/5.jpg',
//         title: 'UP & UNDER',
//         catagory: 'Execution'
//     },
//     {
//         id: 6,
//         thumbnail: '/images/works/6.jpg',
//         title: 'UP & UNDER',
//         catagory: 'Execution'
//     },
//     {
//         id: 7,
//         thumbnail: '/images/works/7.jpg',
//         title: 'UP & UNDER',
//         catagory: 'Execution'
//     },
//     {
//         id: 8,
//         thumbnail: '/images/works/8.jpg',
//         title: 'UP & UNDER',
//         catagory: 'Execution'
//     },
//     {
//         id: 9,
//         thumbnail: '/images/works/9.jpg',
//         title: 'UP & UNDER',
//         catagory: 'Execution'
//     },
//     {
//         id: 10,
//         thumbnail: '/images/works/10.jpg',
//         title: 'UP & UNDER',
//         catagory: 'Execution'
//     },
// ]



function ListThink(props) {
    const { t } = useTranslation();
    return (
        <section className='sectionListWorks'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <div className='ItemListWorks'>
                            <img src={props.data.image_webp}></img>
                            <p>{props.data.category}</p>
                            <h2>{props.data.title}</h2>
                        </div>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default ListThink;