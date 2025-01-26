import React, { createContext, useState } from "react";

const translations = {
  en: {
    greeting: "Hello",
    switch: "Switch Language",
    message: "Welcome to our multi-language app",
  },
  es: {
    greeting: "Hola",
    switch: "Cambiar idioma",
    message: "¡Bienvenido a nuestra aplicación multilingüe!",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage == "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
