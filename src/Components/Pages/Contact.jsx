import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="phoneNum contactCard" onClick={() => window.open("https://wa.me/994506643372")}>
        <div className="icon">
          <FaPhoneAlt />
        </div>
        <h2>+994-50-664-33-72</h2>
      </div>
      <div className="emailAdress contactCard" onClick={() => window.open("mailto:rustamovali664@gmail.com")}>
        <div className="icon">
          <MdEmail />
        </div>
        <h2>rustamovali664@gmail.com</h2>
      </div>
      <div className="linkedinAdress contactCard" onClick={() => window.open("https://www.linkedin.com/in/12-rustamov-ali")}>
        <div className="icon">
          <FaLinkedin />
        </div>
        <h2>www.linkedin.com/in/12-rustamov-ali</h2>
      </div>
      <div className="githubAdress contactCard" onClick={() => window.open("https://github.com/rustamovali0")}>
        <div className="icon">
          <FaGithub />
        </div>
        <h2>
          <a href="https://github.com/rustamovali0" target="_blank" rel="noopener noreferrer">
            https://github.com/rustamovali0
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
