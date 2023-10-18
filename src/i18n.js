import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "Travel App": "Travel App",
      "Around the world": "Around the world",
      "See More": "See More"
    }
  },
  th: {
    translation: {
      "Travel App": "แอปท่องเที่ยว",
      "Around the world": "ท่องเที่ยวรอบโลก",
      "See More": "ดูรายละเอียด"
    }
  }
};

i18n
  // .use(detector) 
  .use(initReactI18next) // passes i18n down to react-i18next
  
  .init({
    resources,
    // fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;