import React from "react";
import Socials from "./Socials";

const CoverPage = () => {
  return (
    <div className='cover-page'>
      <div className='wordmark'></div>
      <div className='dust'></div>
      <div className='date'>
        <div className='day'>26</div>
        <div className='month'>Of July</div>
        <div className='year'>1969 Issue</div>
      </div>

      <div className='leo-picture'></div>
      <div className='copy'>
        <h1 className='subtitle'>
          Rise of<br></br>a Leading<br></br>Man
        </h1>
      </div>
      <Socials />
    </div>
  );
};

export default CoverPage;
