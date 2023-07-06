import './App.scss';
import TitleThinkInfo from './components/TitleThinkInfo.js';
import WriterThinkInfo from './components/WriterThinkInfo.js';
import InfoThink from './components/InfoThink.js';



function PageThinkInfo() {                
  return (
    <div>
        <TitleThinkInfo />
        <InfoThink />
        <WriterThinkInfo />
    </div>
  );
}

export default PageThinkInfo;
