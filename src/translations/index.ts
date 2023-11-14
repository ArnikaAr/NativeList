import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "List": "List",
      "Goods": "Goods",
      "EmptyProductsList": "The list of products are still empty",
      "EmptyGoodsList": "The list of goods are still empty",
      "ChangeTheme": "Change Theme",
      "ChangeLang": "Change Lang",
      "Settings": "Settings",
      "ListDetails": "ListDetails"
    }
  },
  ua: {
    translation: {
      "List": "Список",
      "Goods": "Товари",
      "EmptyProductsList": "Тут поки немає списків",
      "EmptyGoodsList": "Тут поки немає товарів",
      "ChangeTheme": "Змінити тему",
      "ChangeLang": "Змінити мову",
      "Settings": "Налаштування",
      "ListDetails": "Детальніше"
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