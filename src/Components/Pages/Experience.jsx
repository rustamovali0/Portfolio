import React from 'react';

const Experience = () => {
  const openWebsite = () => {
    window.open("https://senior.az", "_blank");
  };

  return (
    <div className='Experience'>
      <article>
        <h1>I studied Front end development in the SENIOR course.</h1>
        <h3>I learned JavaScript, HTML, CSS, BootStrap React.js, Git, and GitHub.</h3>
      </article>
      <img 
        src="https://senior.az/master%20academy_files/seniorlogohr.svg" 
        alt="Senior Logo" 
        onClick={openWebsite}
        
      />
    </div>
  );
};

export default Experience;
