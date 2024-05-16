import './App.scss';
import TitleThinkInfo from './components/TitleThinkInfo.js';
import WriterThinkInfo from './components/WriterThinkInfo.js';
import InfoThink from './components/InfoThink.js';
import ShareThinkInfo from './components/shareThinkInfo.js';
import AppHeader from './components/AppHeader';
import HelmetMetaData from './components/HelmetMetaData.js';

function PageThinkInfo() {
  return (
    <div>
      <HelmetMetaData image={'https://suffix.works/uploads/uploads/thinks/5b9049712180e3de466ea10c9ef8fef2.jpg'}/>
      <AppHeader />
      <TitleThinkInfo />
      <InfoThink />
      <ShareThinkInfo />
      <WriterThinkInfo />
    </div>
  );
}

export default PageThinkInfo;
