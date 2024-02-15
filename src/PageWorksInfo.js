import './App.scss';
import TitleWorksInfo from './components/TitleWorksInfo.js';
import TeamWorksInfo from './components/TeamWorksInfo.js';
import InfoWorks from './components/InfoWorks.js';
import AppHeader from './components/AppHeader';
import ListWorksReacommen from './components/ListWorksReacommen.js';

function PageWorksInfo() {   
  // let { lang } = useParams();
  // const { i18n } = useTranslation();
  // i18n.changeLanguage(lang);             
  return (
    <div>
        <AppHeader />
        <TitleWorksInfo />
        <InfoWorks />
        <TeamWorksInfo />
        <ListWorksReacommen />
    </div>
  );
}

export default PageWorksInfo;
