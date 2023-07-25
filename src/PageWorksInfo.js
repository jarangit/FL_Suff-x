import './App.scss';
import TitleWorksInfo from './components/TitleWorksInfo.js';
import TeamWorksInfo from './components/TeamWorksInfo.js';
import InfoWorks from './components/InfoWorks.js';


import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";


function PageWorksInfo() {   
  // let { lang } = useParams();
  // const { i18n } = useTranslation();
  // i18n.changeLanguage(lang);             
  return (
    <div>
        <TitleWorksInfo />
        <InfoWorks />
        <TeamWorksInfo />
    </div>
  );
}

export default PageWorksInfo;
