import React from "react";
import reactLogo from "../../Images/react.png";

const About = () => {
  return (
    <div className="About">
      <article>
      
        <h4>Hi, my name is</h4>
        <h1>Rustamov Ali.</h1>
        <h1>I build things for the web.</h1>
      <h3>About Me</h3>
      <div className="lineAbout">

      </div>
        <p>
          I work as a front-end developer and specialize in using React.js to
          create user- friendly
        </p>
        <p>
          My problem-solving skills shine through in optimizing front-end
          projects, where React.js plays a key role in achieving a positive user
          experience.
        </p>
        <p>
          Keeping pace with the latest web development trends, I apply my
          knowledge of React.js to build dynamic and efficient web applications.
        </p>
      </article>
     <div className="logoReact">
      <img src={reactLogo} alt="" />
     </div>
    </div>
  );
};

export default About;
