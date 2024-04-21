import React from "react";
import logo from "../../Images/logo_webcoder.png";

const Work = () => {
  return (
    <div className="Work">
      <div className="WorkCards">
        <div className="WorkCard">
        <img src="https://senior.az/master%20academy_files/seniorlogohr.svg" className="img1" alt="" />
          <h1> Senior Course</h1>
          <h4>March 2023 - 2024</h4>
          <h3>I am a mentor in the senior course
            While working, I had the pleasure of teaching students HTML, CSS,
            JavaScript, and React. I helped them develop their skills and
            abilities in these areas by explaining fundamental web development
            concepts. During the training process, we enhanced learning through
            interactive projects and hands-on exercises.
          </h3>
        </div>
        <div className="WorkCard">
          <img src={logo} alt="" className="img2"/>
          <h1>WebCoder Company</h1>
          <h4>March 2024 - Present</h4>
          <h3>
            I work as a front-end developer, focusing on creating user-friendly
            interfaces for websites and web apps. Using HTML, CSS, JavaScript
            and React, I bring designs to life and ensure a smooth user
            experience. I collaborate with designers and back-end developers to
            integrate front-end elements effectively. My aim is to build
            engaging and responsive interfaces that meet user needs.
          </h3>
        </div>
        <div className="WorkCard">
          <img src="https://rpanel.navimax.net/assets/photos/logos/full_logo.png" className="img3" alt="" />
          <h1>Navimax MMC</h1>
          <h4>March 2024 - Present</h4>
          <h3>
            I work project manager. I work as a project manager overseeing the
            testing of websites and mobile applications. I carefully examine
            user experience, functionality, and performance. Coordination from
            start to finish of the project is crucial, emphasizing teamwork and
            communication. My goal is to maintain high levels of customer
            satisfaction and product quality.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Work;
