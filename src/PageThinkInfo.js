import './App.scss';
import TitleThinkInfo from './components/TitleThinkInfo.js';
import WriterThinkInfo from './components/WriterThinkInfo.js';
import InfoThink from './components/InfoThink.js';
import ShareThinkInfo from './components/shareThinkInfo.js';
import AppHeader from './components/AppHeader';

function PageThinkInfo() {
  return (
    <div>
      <AppHeader />
      <TitleThinkInfo />
      <InfoThink />
      <ShareThinkInfo />
      <WriterThinkInfo />
    </div>
  );
}

export default PageThinkInfo;
