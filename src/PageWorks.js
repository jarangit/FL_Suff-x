import './App.scss';
import TitlePage from './components/TitlePage.js';
import ListWorks from './components/ListWorks.js';
import { useParams } from "react-router-dom";

function PageWorks() {      
     let params = useParams();          
  return (
    <div>
        <TitlePage />
        <ListWorks />
    </div>
  );
}

export default PageWorks;
