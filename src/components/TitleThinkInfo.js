import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function TitleThinkInfo() {
    const [data, setData] = useState([]);
    const { slug } = useParams();

    const getWork = (slugUrl) => {
        const url = `https://www.suffix.works/api-v2/think-info/en?slug=${slugUrl}`;
        const config = {
            headers: {
                Authorization: 'Basic c3VmZml4OnN1ZmZpeDIwMjEq',
                // 'Content-Type': 'application/json'
            },
            // body: JSON.stringify(data)

        };
        return axios.get(url, config)
            .then(res => {
                // console.log(res)
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
        <section className='sectionTitlePage sectionTitleWorksInfo sectionTitleThinkInfo'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col lg={{ span: 10, offset: 1 }}>
                            <h3>Think</h3>
                            <h3 className='titleCate'>{data.category}</h3>
                            {/* <h2>{JSON.stringify(data.title)}</h2> */}
                            <h2 dangerouslySetInnerHTML={{ __html: data.title?.replace(/(<([^>]+)>)/ig, '') }}></h2>
                            {/* <div className='titleWorkInfo' dangerouslySetInnerHTML={{ __html: data.title.replace(/(<([^>]+)>)/ig, '') }}></div> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default TitleThinkInfo;