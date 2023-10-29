import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "List": "List",
      "Goods": 'Goods'
    }
  },
  ua: {
    translation: {
      "List": "Список",
      "Goods": 'Товари'
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: "ua", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;