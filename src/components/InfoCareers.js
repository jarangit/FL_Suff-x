import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



// const listInClient = [
//     {
//         id: 1,
//         position: 'UI/UX Designer',
//         descWorksInfo: "2 Magazine is a Bangkok-based lifestyle magazine covering art, dining, culture and interesting interviews. From a print publication, it has transformed into an online magazine. As part of this project, the back-office operations were tested by the magazine’s content editor to make sure it’s easy to upload content online."
//     }
// ]

function InfoCareers() {
    const [data, setData] = useState([]);
    const [lang, setLang] = useState("en");

    const { slug } = useParams();

    const getWork = (slugUrl) => {
        const url = `https://www.suffix.works/api-v2/position/en?id=${slugUrl}`;
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
        getWork(slug);
    }, [slug]);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));
        // this.setState({ selectedFile: event.target.files[0] });
    }
    const [selectedFile, setSelectedFile] = useState(null);
    const onChangeFile = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        const CareersId = document.getElementById("idCareer")
        const email = document.getElementById("email")
        const full_name = document.getElementById("full_name")
        const phone_number = document.getElementById("phone_number")
        const cv = document.getElementById("cv")
        // const message = document.getElementById("message")



        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic c3VmZml4OnN1ZmZpeDIwMjEq");

        var formdata = new FormData();
        formdata.append("CareersId", CareersId.value);
        formdata.append("email", email.value);
        formdata.append("fullName", full_name.value);
        formdata.append("phone", phone_number.value);
        formdata.append("cv", selectedFile);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://www.suffix.works/api-v2/apply", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));



    }

    return (
        <section className='sectionInfoCareers'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col lg={{ span: 5, offset: 1 }}>
                            <h3>Careers</h3></Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 5, offset: 1 }}>
                            <div className='wrapItemInfoCareer'>
                                <h3>Position</h3>
                                <h2>{data.name}</h2>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='wrapItemInfoCareer'>
                                <h3>Why this role important for SUFFIX</h3>
                                <div dangerouslySetInnerHTML={{ __html: data.description_job }}></div>
                                {/* <p>{data.description_job}</p> */}
                            </div>
                            <div className='wrapItemInfoCareer'>
                                <h3>What does SUFFIX offer you?</h3>
                                <div dangerouslySetInnerHTML={{ __html: data.offer }}></div>
                                {/* <p>{data.offer}</p> */}
                            </div>
                            <div className='wrapItemInfoCareer'>
                                <h3>What will you be doing? (Responsibilities)</h3>
                                <div dangerouslySetInnerHTML={{ __html: data.responsibilities }}></div>
                                {/* <p>{data.responsibilities}</p> */}
                            </div>
                            <div className='wrapItemInfoCareer'>
                                <h3>Relevant experience and mindset</h3>
                                <div dangerouslySetInnerHTML={{ __html: data.mindset }}></div>
                                {/* <p>{data.mindset}</p> */}
                            </div>
                            <div className='wrapItemInfoCareer'>
                                <h3>Application Stack</h3>
                                <p>{data.stack}</p>
                                {/* <ul>
                                    {
                                        data.stack?.map((index) => {
                                            return <li key={index}>{index}</li>
                                        })

                                    }
                                </ul> */}
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 2, offset: 5 }}>
                            <Button className="btnApply" variant="primary" onClick={handleShow}>
                                Apply
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <h2>Apply for</h2>
                                <h1 >{data.name}</h1>
                                <Link>Apply with Linkedin</Link>
                                <form onSubmit={handleSubmit}>
                                    <input id="idCareer" value={data.id}></input>
                                    <input
                                        type="text"
                                        name="full_name"
                                        id="full_name"
                                        value={inputs.full_name || ""}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        value={inputs.email || ""}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="phone_number"
                                        id="phone_number"
                                        value={inputs.phone_number || ""}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="file"
                                        name="cv"
                                        id="cv"
                                        value={inputs.cv || ""}
                                        onChange={onChangeFile}
                                    />
                                    <input type="submit" />
                                </form>
                            </Modal>
                        </Col>
                    </Row>
                </Container>

            </div>
        </section>
    );
}

export default InfoCareers;