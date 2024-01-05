import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { FormGroup, Checkbox, FormControlLabel } from '@mui/material';
import { useFormControl } from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from 'react-bootstrap/Modal';
import FadeInSection from './animateFadeIn';

function InfoContact() {
    let params = useParams();
    const url = "https://www.suffix.works/api-v2/contact/" + params.lang + "";
    const [data, setData] = useState([]);
    const [lang, setLang] = useState("en");

    const [showApply, setShowApply] = useState(false);
    const handleCloseApply = () => setShowApply(false);

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


    // const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    // const onSubmit = () => {
    //     // Send data to the backend via POST
    //     fetch('https://www.suffix.works/api-v2/contact-form', {  // Enter your IP address here

    //         method: 'POST',
    //         mode: 'cors',
    //         body: JSON.stringify('application/json; charset=UTF-8') // body data type must match "Content-Type" header

    //     })
    //     return console.log(getValues());
    //     // data => console.log(data);
    // }

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //     var myHeaders = new Headers();
        //     myHeaders.append("Content-Type", "application/json");
        //     myHeaders.append("Authorization", "Basic c3VmZml4OnN1ZmZpeDIwMjEq");

        //     var raw = JSON.stringify({
        //         "full_name":inputs.full_name,
        //         "email":inputs.email,
        //         "phone_number":inputs.phone_number,
        //         "service":inputs.service,
        //         "message":inputs.message,
        //     });

        //     var requestOptions = {
        //         method: 'POST',
        //         headers: myHeaders,
        //         body: raw,
        //         redirect: 'follow'
        //     };

        //     fetch("https://www.suffix.works/api-v2/contact-form", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
        // }

        const email = document.getElementById("email")
        const full_name = document.getElementById("full_name")
        const phone_number = document.getElementById("phone_number")
        const message = document.getElementById("message")


        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic c3VmZml4OnN1ZmZpeDIwMjEq");

        var formdata = new FormData();
        formdata.append("email", email.value);
        formdata.append("full_name", full_name.value);
        formdata.append("phone_number", phone_number.value);
        formdata.append("service", "Digital Strategy: Marketing & Communication");
        formdata.append("message", message.value);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://www.suffix.works/api-v2/contact-form", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        setShowApply(true);

    }
    return (
        <section className='sectionInfoContact'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col lg={{ span: 5, offset: 0 }} sm={{ span: 10, offset: 1 }} className='listItem'>
                            <FadeInSection>
                                <h3>Get in touch</h3>
                                <h1>{data.touch}</h1>
                            </FadeInSection>
                        </Col>
                        <Col lg={{ span: 6, offset: 1 }} sm={{ span: 10, offset: 1 }} className='listItem'>
                            <FadeInSection>
                                <h3>Enquiry</h3>
                                <h2>What services are you looking for</h2>
                                <form onSubmit={handleSubmit}>
                                    <FormControlLabel control={<Checkbox />} label="Digital Strategy: Marketing & Communication" />
                                    <FormControlLabel control={<Checkbox />} label="Digital Executiion: Website & Application  " />
                                    <TextField
                                        required
                                        id="full_name"
                                        label="Name"
                                        variant="standard"
                                        value={inputs.full_name}
                                    />
                                    <TextField
                                        required
                                        id="email"
                                        label="Email"
                                        variant="standard"
                                        value={inputs.email}
                                    />
                                    <TextField
                                        required
                                        id="phone_number"
                                        label="Phone"
                                        variant="standard"
                                        value={inputs.phone_number}
                                    />
                                    <p>Please tell us a little more about your inquiry.</p>
                                    <TextField
                                        required
                                        id="message"
                                        label="Add a note here"
                                        variant="standard"
                                        multiline
                                        rows={8}
                                        value={inputs.message}
                                    />
                                    <input type="submit" className='btnSubmit' />
                                </form>
                            </FadeInSection>
                        </Col>
                        <Modal show={showApply} onHide={handleCloseApply}>
                            <button className='btnClosePopup' onClick={handleCloseApply}>
                                <div className='btnClose'>
                                    <div className='lineClose'></div>
                                    <div className='lineClose'></div>
                                </div>
                            </button>
                            <div className='wrapApplyDone'>
                                {/* <h2>Apply for</h2>
                                    <h1 >{data.name}</h1> */}
                                <p>Thank you. <br></br>
                                    We try to be as responsive as possible. <br></br>
                                    We'll get back to you soon.
                                </p>

                            </div>
                        </Modal>
                    </Row>
                    <Row>
                        <Col lg={{ span: 5, offset: 0 }} md={{ span: 10, offset: 1 }} className='listItem'>
                            <div className='desktopOnly'>
                                <FadeInSection>
                                    <h3>Location</h3>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8313608242784!2d100.57783755076106!3d13.72865770148003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e5343dcafdd%3A0xd71ac4aa2c33bd01!2sSUFFIX!5e0!3m2!1sen!2sth!4v1601447432576!5m2!1sen!2sth"
                                    ></iframe>
                                </FadeInSection>
                            </div>

                        </Col>
                        <Col lg={{ span: 6, offset: 1 }} sm={{ span: 10, offset: 1 }} className='listItem'>
                            <FadeInSection>
                                <h3>Address</h3>
                                <h2 dangerouslySetInnerHTML={{ __html: data.address }}></h2>
                                {/* <h2>{data.address}</h2> */}
                                <Row className='wrapContactLink'>
                                    <Col>
                                        <h3>Telephone</h3>
                                        <button onClick={() => window.location = `tel:${data.id}`}>{data.telephone}</button>

                                    </Col>
                                    <Col>
                                        <h3>Email</h3>
                                        <button onClick={() => window.location = `mailto:${data.email}`}>{data.email}</button>

                                    </Col>
                                </Row>

                                <div className='tabletMobile'>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8313608242784!2d100.57783755076106!3d13.72865770148003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e5343dcafdd%3A0xd71ac4aa2c33bd01!2sSUFFIX!5e0!3m2!1sen!2sth!4v1601447432576!5m2!1sen!2sth"
                                    ></iframe>
                                </div>
                            </FadeInSection>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default InfoContact;