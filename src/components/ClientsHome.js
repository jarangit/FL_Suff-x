import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

// const listClientsHome = [
//     {
//         id: 1,
//         image: '/images/home/clients/1.svg',
//     },
//     {
//         id: 2,
//         image: '/images/home/clients/1.svg',
//     },
//     {
//         id: 3,
//         image: '/images/home/clients/1.svg',
//     },
//     {
//         id: 4,
//         image: '/images/home/clients/1.svg',
//     },
//     {
//         id: 5,
//         image: '/images/home/clients/1.svg',
//     },
//     {
//         id: 6,
//         image: '/images/home/clients/1.svg',
//     },
//     {
//         id: 7,
//         image: '/images/home/clients/1.svg',
//     },
//     {
//         id: 8,
//         image: '/images/home/clients/1.svg',
//     }
// ]


function ClientsHome() {
    const url = "https://www.suffix.works/api-v2/home/en";
    const [data, setData] = useState([]);
    const [lang, setLang] = useState("en");

    const { t, i18n } = useTranslation();

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
        <div className='wrapPage'>
            <section className='sectionClientHome'>
                <Container>
                    <Row>
                        <Col>
                            <h3>{t('Clients')}</h3>
                            <div className='wrapListClientHome'>
                                <ul>
                                    {
                                        data.client?.map(user => {
                                            return <li key={user.name} ><img src={user.image}></img></li>
                                        })
                                    }
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <a>
                    <button>{t('All Client')}</button>
                </a>
            </section>
        </div>
    );
}

export default ClientsHome;