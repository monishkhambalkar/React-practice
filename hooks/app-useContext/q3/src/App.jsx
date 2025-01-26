import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const App = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{translations[language].greeting}!</h1>
      <p>{translations[language].message}</p>
      <LanguageSwitcher />
    </div>
  );
};

export default App;
