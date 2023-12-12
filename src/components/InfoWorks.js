import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function InfoWorks() {
    const [data, setData] = useState([]);
    const [lang, setLang] = useState("");

    const { slug } = useParams();
    // const { lang } = useParams();
   
    let params = useParams();
    const getWork = (slugUrl) => {
        const selectLang = params.lang;
        const url = `https://www.suffix.works/api-v2/work-detail/${selectLang}?slug=${slugUrl}`;
        const config = {
            headers: {
                Authorization: 'Basic c3VmZml4OnN1ZmZpeDIwMjEq',
            }
        };


        return axios.get(url, config)
            .then(res => {
                console.log(res)
                setData(res.data);
                console.log(selectLang);
            })
            .catch(err => console.log(err))
        // return fetch(url)
        //     .then((res) => res.json())
        //     .then((d) => setData(d))
    }

    // const getLang = async (e) => {
    //     const changeLang = e.params.lang;
    //     setLang(changeLang);
    // };

    useEffect(() => {
        getWork(slug);
    }, [slug]);
    

    return (
        <section className='sectionInfoWorks'>
            <div className='wrapPage'>
                <Container key={data.id}>
                    <Row>
                        <Col lg={12}>
                            <img className='imageThumbnail' src={data.thumbnails}></img>
                        </Col>
                        <Col md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }}>
                            <div className='wrapDescProcess'>
                                <h4>Process</h4>
                                <p dangerouslySetInnerHTML={{ __html: data.process?.toString().replace(/\r?\n|\r/g, '<br>') }}></p>
                            </div>
                            {/* <div dangerouslySetInnerHTML={{ __html: data.process }}></div> */}
                           
                        </Col>
                        <Col lg={12}>

                            {
                                data.image_result?.map((index) => {
                                    return <img key={index} className='imageBannerCenter' src={index.image}></img>
                                })

                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default InfoWorks;