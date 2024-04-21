import React, { useState, useEffect } from "react";
import logo from "../Images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Menüyü her sayfa değiştiğinde kapat
  }, [location]);

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
              <Link to={path}>{path.substr(1)}</Link>
            </li>
          ))}
        </ul>
        <button>Resume</button>
      </div>
      <div className={`burgerMenu ${!isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </div>
      <div className={`close ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
        <IoClose />
      </div>
      <div className={`ResponsiveUl ${isOpen ? 'active' : ''}`}>
        <div className="responsiveUlCon">
          <ul>
            {['/About', '/Experience', '/Education', '/Work', '/Contact'].map(path => (
              <li key={path}>
                <Link to={path}>{path.substr(1)}</Link>
              </li>
            ))}
          </ul>
          <button>Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
