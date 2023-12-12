import React, { useEffect, useRef, useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import axios from 'axios';
import FadeInSection from './animateFadeIn';


function Navbar({ observerRefs }) {

  let params = useParams();
  const { t, i18n } = useTranslation();
  const url = "https://www.suffix.works/api-v2/home/" + params.lang + "";
  const [data, setData] = useState([]);
  // const [lang, setLang] = useState("en");

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
    <>
      <div className='wrapSubTitleWorksHome'>
       <FadeInSection>
       <h2>{data.work_description}</h2>
       </FadeInSection>
      </div>

    </>
  );
}

export default Navbar;
