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
                    <h3>Clients</h3>
                    <h1>{data.title}</h1>
                    <h3>Client List</h3>
                    {
                        data.industries?.map((industrie, index) => {
                            return <Row className='wrapItemListCareers'>
                                <Col lg={6} sm={6} xs={12}>
                                    <div key={industrie.name} className='ItemListCareers'>
                                        <h2>{industrie.name}</h2>
                                    </div>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <div className='ItemListCareers'>
                                        <ul>

                                            {
                                                industrie.client.map((index) => {
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
            </div>
            {/* <div className="App">
                <h1 style={{ color: "green" }}>using Axios Library to Fetch Data</h1>
                <center>
                    {data.map((dataObj, index) => {
                        return (
                            <div
                                style={{
                                    width: "15em",
                                    backgroundColor: "#CD8FFD",
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
            </div> */}
        </section>
    );
}

export default ListClient;