import React, { createContext, useState } from 'react';
import { en, es } from '../lang/Languages';
const LanguageContext = createContext(false);

const LanguageProvider = ({ children }) => {
  let lang = localStorage.getItem('language');
  const [language, setlanguage] = useState(lang === 'es' ? es : en);
  
  const changeLanguage = (val) => {
    switch (val) {
      case 'es':
        setlanguage(es);
        localStorage.setItem('language', 'es');
        break;
      case 'en':
        setlanguage(en);
        localStorage.setItem('language', 'en');
        break;
      default:
        break;
    }
  };
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
export { LanguageContext, LanguageProvider };
