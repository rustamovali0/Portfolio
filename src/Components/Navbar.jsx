import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import englishFlag from '../Images/english-flag.png';
import turkishFlag from '../Images/turkish-flag.png';
import azerbaijaniFlag from '../Images/azerbaijani-flag.png';
import logo from "../Images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="NavUl">
        <ul>
          {['/About', '/Experience', '/Education', '/Work', '/Contact'].map(path => (
            <li key={path} className={location.pathname === path ? "active" : ""}>
              <Link to={path}>{t('navbar.' + path.substr(1).toLowerCase())}</Link>
            </li>
          ))}
        </ul>
        
        <button id="resumeBtn">Resume</button>
        <div className="dropdown">
          <button className="dropbtn">
            <img src={i18n.language === 'en' ? englishFlag : i18n.language === 'tr' ? turkishFlag : azerbaijaniFlag} alt={i18n.language.toUpperCase()} />
          </button>
          <div className="dropdown-content">
            <button onClick={() => changeLanguage('en')}><img src={englishFlag} className="flagImg" alt="EN" /> English</button>
            <button onClick={() => changeLanguage('tr')}><img src={turkishFlag} className="flagImg" alt="TR" /> Türkçe</button>
            <button onClick={() => changeLanguage('az')}><img src={azerbaijaniFlag} className="flagImg" alt="AZ" /> Azərbaycan</button>
          </div>
        </div>
      </div>
      <div className={`burgerMenu ${!isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>
      <div className={`close ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <IoClose />
      </div>
      <div className={`ResponsiveUl ${isOpen ? 'active' : ''}`}>
        <div className="responsiveUlCon">
          <ul>
            {['/About', '/Experience', '/Education', '/Work', '/Contact'].map(path => (
              <li key={path}>
                <Link to={path}>{t('navbar.' + path.substr(1).toLowerCase())}</Link>
              </li>
            ))}
          </ul>
          <button id="resumeBtn">Resume</button>
          <div className="dropdownRes">
          <button className="dropbtn">
          <img src={i18n.language === 'en' ? englishFlag : i18n.language === 'tr' ? turkishFlag : azerbaijaniFlag} alt={i18n.language.toUpperCase()} />
          </button>
          <div className="dropdown-content">
            <button onClick={() => changeLanguage('en')}><img src={englishFlag} className="flagImg" alt="EN" /> English</button>
            <button onClick={() => changeLanguage('tr')}><img src={turkishFlag} className="flagImg" alt="TR" /> Türkçe</button>
            <button onClick={() => changeLanguage('az')}><img src={azerbaijaniFlag} className="flagImg" alt="AZ" /> Azərbaycan</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
