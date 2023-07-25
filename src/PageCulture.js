import './App.scss';
import InfoCulture from './components/InfoCulture.js';
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import AppHeader from './components/AppHeader';

function PageCulture() {   
  // let { lang } = useParams();
  // const { i18n } = useTranslation();
  // i18n.changeLanguage(lang);
  let params = useParams();
  console.log(params.lang);

  return (
    <div>
         <InfoCulture />
    </div>
  );
}

export default PageCulture;
