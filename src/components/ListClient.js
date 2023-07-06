import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";

function ListClient() {

    const url = "https://www.suffix.works/api-v2/client/en";
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
                setData(res);
            })
            .catch(err => console.log(err))
        // return fetch(url)
        //     .then((res) => res.json())
        //     .then((d) => setData(d))
    }

    useEffect(() => {
        getWork();
    }, []);

    const listItemCient = [
        {
            id: 1,
            name: 'Automotive',
            client: [
                "Benz BKK Group",
                "Honda Cub House"
            ]
        },
        {
            id: 2,
            name: 'Digital Product',
            client: [
                "Butler",
                "Fourleaf",
                "Health at home",
                "Mochamp",
                "Mespace",
                "Popatee",
                "Sixlab",
                "Tripily"
            ]
        }
    ]

    // const client = [];

    return (
        <section className='sectionListCareers'>
            {/* <div className='wrapPage'>
                <Container>
                    <h3>Clients</h3>
                    {
                        listItemCient.map((industries) => {
                            return <Row className='wrapItemListCareers'>
                                <Col lg={6}>
                                    <div key={industries.id} className='ItemListCareers'>
                                        <h2>{industries.name}</h2>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='ItemListCareers'>
                                        <ul>

                                            {
                                                industries.client.map((index) => {
                                                    return <li key={index} className='list'>{index}</li>
                                                })

                                            }
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        })
                    }
                </Container>
            </div> */}
            <div className="App">
                <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
                <center>
                    {data.map((dataObj, index) => {
                        return (
                            <div
                                style={{
                                    width: "15em",
                                    backgroundColor: "#35D841",
                                    padding: 2,
                                    borderRadius: 10,
                                    marginBlock: 10,
                                }}
                            >
                                <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
                            </div>
                        );
                    })}
                </center>
            </div>
        </section>
    );
}

export default ListClient;