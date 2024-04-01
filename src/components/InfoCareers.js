import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

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
    const { t, i18n } = useTranslation();
    const { slug } = useParams();
    let params = useParams();
    const getWork = (slugUrl) => {
        const selectLang = params.lang;
        const url = `https://128.199.72.95/api-v2/position/${selectLang}?id=${slugUrl}`;
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

    const [val, setVal] = useState("")
    const [selectBool, setSelectBool] = useState(false);
    const [helperText, setHelperText] =
        useState("")


    const onHandleChange = (e) => {
        setVal(e.target.value);
        const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/g;

        if (e.target?.value && e.target.value.match(isValidEmail)) {

            setSelectBool(false)
            setHelperText("")
        }
        else {
            setSelectBool(true)
            setHelperText(
                "")
        }
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [showApply, setShowApply] = useState(false);

    const handleCloseApply = () => setShowApply(false);
    const handleShowApply = () => setShowApply(true);


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

        fetch("https://128.199.72.95/api-v2/apply", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        setShowApply(true);


    }

    return (
        <section className='sectionInfoCareers'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col lg={{ span: 5, offset: 1 }}>
                            <h3>{t('careers')}</h3></Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 5, offset: 1 }}>
                            <div className='wrapItemInfoCareer'>
                                <h3>{t('Position')}</h3>
                                <h2>{data.name}</h2>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='wrapItemInfoCareer'>
                                <h3>{t('role')}</h3>
                                {/* <h4 dangerouslySetInnerHTML={{ __html: data.description_job }}></h4> */}
                                <h4 dangerouslySetInnerHTML={{ __html: data.description_job?.toString().replace(/\r?\n|\r/g, '') }}></h4>
                                {/* <h4 dangerouslySetInnerHTML={{ __html: data.description_job?.toString().replace(/\r?\n|\r/g, '<br>') }}></h4> */}
                                {/* <p>{data.description_job}</p> */}
                            </div>
                            <div className='wrapItemInfoCareer'>
                                <h3>{t('offer')}</h3>
                                <p dangerouslySetInnerHTML={{ __html: data.offer?.toString().replace(/\r?\n|\r/g, '') }}></p>
                                {/* <p>{data.offer}</p> */}
                            </div>
                            <div className='wrapItemInfoCareer'>
                                <h3>{t('Responsibilities')}</h3>
                                <p dangerouslySetInnerHTML={{ __html: data.responsibilities?.toString().replace(/\r?\n|\r/g, '') }}></p>
                            </div>
                            <div className='wrapItemInfoCareer'>
                                <h3>{t('mindset')}</h3>
                                <p dangerouslySetInnerHTML={{ __html: data.mindset?.toString().replace(/\r?\n|\r/g, '') }}></p>
                                {/* <p>{data.mindset}</p> */}
                            </div>
                            <div className='wrapItemInfoCareer'>
                                <h3>{t('Application')}</h3>
                                <p dangerouslySetInnerHTML={{ __html: data.stack?.toString().replace(/\r?\n|\r/g, '') }}></p>
                                {/* <p>{data.stack}</p> */}
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
                            <Button className="btnApply" onClick={handleShow}>
                                {t('Apply')}
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <button className='btnClosePopup' onClick={handleClose}>
                                    <div className='btnClose'>
                                        <div className='lineClose'></div>
                                        <div className='lineClose'></div>
                                    </div>
                                </button>
                                <div className='wrapFormCareer'>
                                    <h2>{t('Apply for')}</h2>
                                    <h1 >{data.name}</h1>
                                    {/* <Link to={data.url_linkedin}>Apply with Linkedin</Link> */}
                                    {/* <form onSubmit={handleSubmit}>
                                        <input id="idCareer" value={data.id}></input>
                                        <label className="textRequire" for="full_name">Required</label>
                                        <input
                                            type="text"
                                            name="full_name"
                                            id="full_name"
                                            placeholder="Name"
                                            value={inputs.full_name || ""}
                                            onChange={handleChange}
                                        />
                                        <label className="textRequire" for="email">Required</label>

                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            value={inputs.email || ""}
                                            onChange={handleChange}
                                        />
                                        <label className="textRequire" for="phone_number">Required</label>

                                        <input
                                            type="text"
                                            name="phone_number"
                                            id="phone_number"
                                            placeholder="Phone"
                                            value={inputs.phone_number || ""}
                                            onChange={handleChange}
                                        />
                                        <label className="textRequire" for="phone_number">Required</label>

                                        <label className="textFile" for="cv">Upload Resume  (Maximum 2mb)</label>
                                        <input
                                            type="file"
                                            name="cv"
                                            id="cv"
                                            value={inputs.cv || ""}
                                            onChange={onChangeFile}
                                        />
                                        <input className='btnSubmit' type="submit" value="Apply" />
                                    </form> */}
                                    <form onSubmit={handleSubmit}>
                                        <input id="idCareer" value={data.id}></input>
                                        <TextField
                                            required
                                            id="full_name"
                                            label={t('Name')}
                                            variant="standard"
                                            value={inputs.full_name}
                                        />

                                        <div className='wrapInputEmail'>
                                            <TextField
                                                required
                                                id="email"
                                                label={t('Email')}
                                                variant="standard"
                                                value={inputs.email}
                                                onChange={onHandleChange}
                                            />
                                            <FormHelperText id="username-helper"
                                                error={selectBool}>{helperText}
                                            </FormHelperText>
                                        </div>
                                        <TextField
                                            required
                                            id="phone_number"
                                            label={t('Phone')}
                                            variant="standard"
                                            value={inputs.phone_number}
                                        />
                                        <label className="textFile" for="cv">Upload Resume  (Maximum 2mb)</label>
                                        <input
                                            type="file"
                                            name="cv"
                                            id="cv"
                                            value={inputs.cv || ""}
                                            onChange={onChangeFile}
                                        />


                                        <input type="submit" className='btnSubmit' value={t('Apply')} />
                                    </form>
                                </div>
                            </Modal>
                            <Modal show={showApply} onHide={handleCloseApply}>
                                <button className='btnClosePopup' onClick={handleCloseApply}>
                                    <div className='btnClose'>
                                        <div className='lineClose'></div>
                                        <div className='lineClose'></div>
                                    </div>
                                </button>
                                <div className='wrapApplyDone'>
                                    <h2>Apply for</h2>
                                    <h1 >{data.name}</h1>
                                    <p>Thank you. <br></br>
                                        We try to be as responsive as possible. <br></br>
                                        We'll get back to you soon.
                                    </p>

                                </div>
                            </Modal>
                        </Col>
                    </Row>
                </Container>

            </div>
        </section>
    );
}

export default InfoCareers;