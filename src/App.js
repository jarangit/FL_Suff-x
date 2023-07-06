import './App.scss';
import AppHeader from './components/AppHeader.js';
import AppFooter from './components/AppFooter.js';

import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageHome from './PageHome.js';
import PageProject from './PageProject.js';
import PageWorks from './PageWorks.js';
import PageWorksInfo from './PageWorksInfo';
import PageThink from './PageThink';
import PageThinkInfo from './PageThinkInfo';
import PageClients from './PageClients';
import PageCulture from './PageCulture';
import PageCareers from './PageCareers';
import PageCareersInfo from './PageCareersInfo';
import PageContact from './PageContact';



function App() {
  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path='/' element={<PageHome />}></Route>
        <Route path='/project' element={<PageProject />}></Route>
        <Route path='/works' element={<PageWorks />}></Route>
        <Route path='/worksInfo' element={<PageWorksInfo />}></Route>
        <Route path='/think' element={<PageThink />}></Route>
        <Route path='/thinkInfo' element={<PageThinkInfo />}></Route>
        <Route path='/client' element={<PageClients />}></Route>
        <Route path='/culture' element={<PageCulture />}></Route>
        <Route path='/carrers' element={<PageCareers />}></Route>
        <Route path='/carrersInfo' element={<PageCareersInfo />}></Route>
        <Route path='/contact' element={<PageContact />}></Route>
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
