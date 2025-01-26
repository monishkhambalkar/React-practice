import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

const LanguageSwitcher = () => {
  const { toggleLanguage, translations, language } =
    useContext(LanguageContext);

  return (
    <>
      <button
        onClick={toggleLanguage}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "#FFFFFF",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {translations[language].switch}
      </button>
    </>
  );
};

export default LanguageSwitcher;
