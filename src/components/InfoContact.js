import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import axios from 'axios';
import React, { useState, useEffect } from "react";
import { FormGroup, Checkbox, FormControlLabel } from '@mui/material';
import { useFormControl } from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function InfoContact() {
    const url = "https://www.suffix.works/api-v2/contact/en";
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

    }
    return (
        <section className='sectionInfoContact'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h3>Get in touch</h3>
                            <h1>{data.description}</h1>
                        </Col>
                        <Col lg={5}>
                            <h3>Enquiry</h3>
                            <h2>What services are you looking for</h2>
                            <FormGroup>
                                <FormControlLabel required control={<Checkbox />} label="Digital Strategy: Marketing & Communication" />
                                <FormControlLabel required control={<Checkbox />} label="Digital Executiion: Website & Application  " />
                                <TextField
                                    required
                                    id="standard-required"
                                    label="Required"
                                    variant="standard"
                                />
                            </FormGroup>
                            <form onSubmit={handleSubmit}>
                                {/* <FormControlLabel required control={<Checkbox defaultChecked />} label="Label" /> */}

                                <input
                                    type="text"
                                    name="full_name"
                                    id="full_name"
                                    placeholder="Name"
                                    value={inputs.full_name || ""}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={inputs.email || ""}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="phone_number"
                                    placeholder="Phone"
                                    id="phone_number"
                                    value={inputs.phone_number || ""}
                                    onChange={handleChange}
                                />
                                <label>Please tell us a little more about your enquiry</label>
                                <textarea
                                    type="text"
                                    name="message"
                                    id="message"
                                    placeholder="Add a note here"
                                    value={inputs.message || ""}
                                    onChange={handleChange}
                                    rows={4}
                                />
                                <input type="submit" className='btnSubmit' />
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <h3>Location</h3>

                        </Col>
                        <Col lg={6}>
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

                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default InfoContact;