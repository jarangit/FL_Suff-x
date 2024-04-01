import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnimatedNumbers from "react-animated-numbers";
import AnimatedNumber from "animated-number-react";
import axios from 'axios';
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import CountUp from 'react-countup';
import FadeInSection from './animateFadeIn';

function Approach() {
    let params = useParams();
    const { t } = useTranslation();
    const url = "https://128.199.72.95/api-v2/home/" + params.lang + "";
    const [data, setData] = useState([]);
    // const [lang, setLang] = useState("en");

    const [num, setNum] = React.useState(331231);


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
            <Container>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10} sm={12}>
                        <FadeInSection>
                            <div className='wrapApproach'>
                                <h3 className='example-style'>{t('Approach')}</h3>
                                <h2 className='titleApproach' dangerouslySetInnerHTML={{ __html: data.approach?.toString().replace(/(<([^>]+)>)/ig, '') }}></h2>
                                <h3>{t('Overall')}</h3>
                                <div className='wrapTextApproach'>
                                    {
                                        data.overall?.map((user, index) => {
                                            return <span key={user.index}>
                                                <span><CountUp end={user.total}
                                                    duration={5} /> </span>
                                                {/* <h2 className='textRun'>{user.total}</h2> */}
                                                {/* <span className='textRun'>{user.name}, </span> */}
                                                <span>{user.name}<span>, </span></span>
                                            </span>

                                        })
                                    }
                                </div>
                            </div>
                        </FadeInSection>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>

        </div>
    );
}

export default Approach;