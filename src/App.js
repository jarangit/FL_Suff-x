import './App.scss';
import AppHeader from './components/AppHeader.js';
import AppFooter from './components/AppFooter.js';
import { Redirect } from 'react-router-dom';
import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
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
import PageServices from './PageServices';
import PageSiteMaps from './PageSiteMaps';
import PagePolicy from './PagePrivacyPolicy';
import PageTerm from './PageTerm';
import HelmetMetaData from "./components/HelmetMetaData";
import { HelmetProvider } from 'react-helmet-async';
import { FacebookShareButton, FacebookIcon } from "react-share";


import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.js';


function App() {
  // let { lang } = useParams();
  // const { i18n } = useTranslation();
  // i18n.changeLanguage(lang);
  // useEffect(() => {
  //   window.history.scrollRestoration = 'manual'
  // }, []);
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <div>
        {/* <AppHeader /> */}
        {/* <HelmetMetaData></HelmetMetaData> */}
        <Routes>
          <Route path="/" element={<Navigate to={`/en`} replace />} />

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
            path="/works/:slug/:lang?"
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
            path="Thoughts/:lang?"
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
            path="/Thoughts/:slug/:lang?"
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
            path="/position/:slug/:lang?"
            // the matching param might be available to the loader
            loader={({ params }) => {
              console.log(params["lang"]); // "en"
            }}
            // and the action
            action={({ params }) => { }}
            element={<PageCareersInfo />}
          />;
          <Route
            // this path will match URLs like
            // - /categories
            // - /en/categories
            // - /fr/categories
            path="contact/:lang?"
            // the matching param might be available to the loader
            loader={({ params }) => {
              console.log(params["lang"]); // "en"
            }}
            // and the action
            action={({ params }) => { }}
            element={<PageContact />}
          />;
          <Route
            // this path will match URLs like
            // - /categories
            // - /en/categories
            // - /fr/categories
            path="services/:lang?"
            // the matching param might be available to the loader
            loader={({ params }) => {
              console.log(params["lang"]); // "en"
            }}
            // and the action
            action={({ params }) => { }}
            element={<PageServices />}
          />;
          {/* <Route path='/contact' element={<PageContact />}></Route> */}
          <Route
            // this path will match URLs like
            // - /categories
            // - /en/categories
            // - /fr/categories
            path="sitemap/:lang?"
            // the matching param might be available to the loader
            loader={({ params }) => {
              console.log(params["lang"]); // "en"
            }}
            // and the action
            action={({ params }) => { }}
            element={<PageSiteMaps />}
          />;
          <Route
            // this path will match URLs like
            // - /categories
            // - /en/categories
            // - /fr/categories
            path="policy/:lang?"
            // the matching param might be available to the loader
            loader={({ params }) => {
              console.log(params["lang"]); // "en"
            }}
            // and the action
            action={({ params }) => { }}
            element={<PagePolicy />}
          />;
          <Route
            // this path will match URLs like
            // - /categories
            // - /en/categories
            // - /fr/categories
            path="term/:lang?"
            // the matching param might be available to the loader
            loader={({ params }) => {
              console.log(params["lang"]); // "en"
            }}
            // and the action
            action={({ params }) => { }}
            element={<PageTerm />}
          />;
        </Routes>
        <ScrollToTop />
        {/* <FacebookShareButton
          url={"http://www.camperstribe.com"}
          quote={"CampersTribe - World is yours to explore"}
         
        >
          <FacebookIcon size={36} />
        </FacebookShareButton> */}
        <AppFooter />
      </div>
    </HelmetProvider>
  );
}

export default App;


