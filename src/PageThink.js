import './App.scss';
import TitlePageThink from './components/TitlePageThink.js';
// import ListThink from './components/ListThink.js';
import Think from './components/Thinks.js'
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import AppHeader from './components/AppHeader';
import {Helmet} from "react-helmet";
import HelmetMetaData from "./components/HelmetMetaData";

function PageThink() {
  // let { lang } = useParams();
  // const { i18n } = useTranslation();
  // i18n.changeLanguage(lang);

  return (
    <div>

      <AppHeader />
      <HelmetMetaData></HelmetMetaData>
      <TitlePageThink />
      <Think />

    </div>
  );
}

export default PageThink;
