// Experience.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  const openWebsite = () => {
    window.open("https://senior.az", "_blank");
  };

  return (
    <div className='Experience'>
      <article>
        <h1>{t('experience.title')}</h1>
        <h3>{t('experience.description')}</h3>
      </article>
      <img 
        src="https://scontent.fgyd4-2.fna.fbcdn.net/v/t39.30808-1/342764179_1188160978565082_4311906518468152017_n.jpg?stp=c62.0.200.200a_dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=hvAFyg4EYbYQ7kNvgGRDVE6&_nc_ht=scontent.fgyd4-2.fna&oh=00_AYD4JhvtSgYuFUQt7x3mdorNvNzYS555inQ12oZIwzR7MA&oe=66AD33BF" 
        alt="Senior Logo" 
        onClick={openWebsite}
      />
    </div>
  );
};

export default Experience;
