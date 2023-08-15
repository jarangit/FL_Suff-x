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
    let params = useParams();
    const url = "https://www.suffix.works/api-v2/think/" + params.lang + "";
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
        <section className='sectionListWorks'>
            <div className='wrapPage'>
                <Container>
                    <Row>

                        {
                            data.think_info?.map(user => {
                                return <div key={user.id}>
                                    <Link to={`/think/${params.lang}/${user.slug}`}>
                                        <div className='ItemListWorks'>
                                            <img src={data.image_webp}></img>
                                            <p>{data.category}</p>
                                            <h2>{data.title}</h2>
                                        </div>
                                    </Link>
                                </div>
                            })
                        }
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default ListThink;