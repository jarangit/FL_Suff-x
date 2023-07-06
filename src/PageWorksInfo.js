import './App.scss';
import TitleWorksInfo from './components/TitleWorksInfo.js';
import TeamWorksInfo from './components/TeamWorksInfo.js';
import InfoWorks from './components/InfoWorks.js';



function PageWorks() {                
  return (
    <div>
        <TitleWorksInfo />
        <InfoWorks />
        <TeamWorksInfo />
    </div>
  );
}

export default PageWorks;
