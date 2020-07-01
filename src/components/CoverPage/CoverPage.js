import React from "react";
import Socials from "../Information/Socials";
import Date from "../Information/Date";

const CoverPage = () => {
  return (
    <div className='cover-page'>
      <div className='wordmark'></div>
      <div className='dust'></div>
      <Date/>
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
