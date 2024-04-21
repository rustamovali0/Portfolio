import React from 'react';

const Education = () => {
  const openWebsite = () => {
    window.open("https://au.edu.az", "_blank");
  };

  return (
    <div className='Education'>
      <article>
        <h3>2019-2023</h3>
        <h1>Azerbaijan University</h1>
      </article>
      <img 
        src="https://au.edu.az/userfiles/uploads/f121d135f39f03e48da5fe5e8ced5b0a.jpg" 
        alt="Azerbaijan University Logo" 
        onClick={openWebsite}
        style={{ cursor: 'pointer' }} // Change cursor to pointer when hovering over the image
      />
    </div>
  );
};

export default Education;
