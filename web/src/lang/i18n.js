import i18n from 'i18next'
import { initReactI18next} from 'react-i18next'
import languagesJSON from './lang.map.json'

export const defaultLanguageCode = localStorage.getItem('lang') || "fr"

i18n.use(initReactI18next)
.init({
    lng: defaultLanguageCode,
    fallbackLng:  defaultLanguageCode,
    interpolation: {
      escapeValue: false,
    },
    resources: languagesJSON,
  });

export default i18n;