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
import PageSiteMaps from './PageSiteMaps';
import PagePolicy from './PagePrivacyPolicy';

import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";

function App() {

  let { lang } = useParams();
  const { i18n } = useTranslation();
  i18n.changeLanguage(lang);

  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path='/:lang?/' element={<PageHome />}></Route>
        <Route path='/project' element={<PageProject />}></Route>
        <Route path='/works/:lang?' element={<PageWorks />}></Route>
        {/* <Route path="/works/:lang/:slug" element={<PageWorksInfo />}></Route> */}
        {/* <Route path="works/:lang?"
          // the matching param might be available to the loader
          loader={({ params }) => {
            console.log(params["lang"]); // "en"
          }}
          // and the action
          action={({ params }) => { }}
          element={<PageWorks />}
        />; */}
         <Route
          // this path will match URLs like
          // - /categories
          // - /en/categories
          // - /fr/categories
          path="/works/:lang?/:slug"
          // the matching param might be available to the loader
          loader={({ params }) => {
            console.log(params["lang"]); // "en"
          }}
          // and the action
          action={({ params }) => { }}
          element={<PageWorksInfo />}
        />;
        {/* <Route path='/think/:lang/' element={<PageThink />}></Route> */}
        {/* <Route path='/think/:slug' element={<PageThinkInfo />}></Route> */}
        <Route
          // this path will match URLs like
          // - /categories
          // - /en/categories
          // - /fr/categories
          path="think/:lang?"
          // the matching param might be available to the loader
          loader={({ params }) => {
            console.log(params["lang"]); // "en"
          }}
          // and the action
          action={({ params }) => { }}
          element={<PageThink />}
        />;
        <Route
          // this path will match URLs like
          // - /categories
          // - /en/categories
          // - /fr/categories
          path="/think/:lang?/:slug"
          // the matching param might be available to the loader
          loader={({ params }) => {
            console.log(params["lang"]); // "en"
          }}
          // and the action
          action={({ params }) => { }}
          element={<PageThinkInfo />}
        />;
        <Route path='/client/:lang?' element={<PageClients />}></Route>
        <Route
          // this path will match URLs like
          // - /categories
          // - /en/categories
          // - /fr/categories
          path="culture/:lang?"
          // the matching param might be available to the loader
          loader={({ params }) => {
            console.log(params["lang"]); // "en"
          }}
          // and the action
          action={({ params }) => { }}
          element={<PageCulture />}
        />;
              <Route
          // this path will match URLs like
          // - /categories
          // - /en/categories
          // - /fr/categories
          path="careers/:lang?"
          // the matching param might be available to the loader
          loader={({ params }) => {
            console.log(params["lang"]); // "en"
          }}
          // and the action
          action={({ params }) => { }}
          element={<PageCareers />}
        />;
        <Route
          // this path will match URLs like
          // - /categories
          // - /en/categories
          // - /fr/categories
          path="/position/:lang?/:slug"
          // the matching param might be available to the loader
          loader={({ params }) => {
            console.log(params["lang"]); // "en"
          }}
          // and the action
          action={({ params }) => { }}
          element={<PageCareersInfo />}
        />;
        <Route path='/contact' element={<PageContact />}></Route>
        <Route path='/sitemap' element={<PageSiteMaps />}></Route>
        <Route path='/policy' element={<PagePolicy />}></Route>
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
