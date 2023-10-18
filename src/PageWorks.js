import './App.scss';
import TitlePage from './components/TitlePage.js';
import ListWorks from './components/ListWorks.js';
import { useParams } from "react-router-dom";
import AppHeader from './components/AppHeader.js';

function PageWorks() {              
  return (
    <div>
        <AppHeader />
        <TitlePage />
        <ListWorks />
    </div>
  );
}

export default PageWorks;
