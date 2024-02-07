import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrate, render } from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import './i18n';
import { CookiesProvider } from 'react-cookie';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
});

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <CookiesProvider defaultSetOptions={{ path: '/' }}>
  //       <App />
  //     </CookiesProvider>
  //   </BrowserRouter>
  // </React.StrictMode>
// );
const AppWithRouter = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(AppWithRouter, rootElement);
} else {
  render(AppWithRouter, rootElement);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
