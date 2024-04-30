// About.jsx

import React from "react";
import { useTranslation } from 'react-i18next'; // i18next kullanarak çeviri işlevlerini içe aktar
import reactLogo from "../../Images/react.png";

const About = () => {
  const { t } = useTranslation(); // Çeviri işlevlerini al

  return (
    <div className="About">
      <article>
        <h4>{t('about.title')}</h4>
        <h1>{t('about.name')}</h1>
        <h1>{t('about.subtitle')}</h1>
        <h3>{t('about.aboutMe')}</h3>
        <div className="lineAbout"></div>
        <p>{t('about.description1')}</p>
        <p>{t('about.description2')}</p>
        <p>{t('about.description3')}</p>
      </article>
      <div className="logoReact">
        <img src={reactLogo} alt="" />
      </div>
    </div>
  );
};

export default About;
