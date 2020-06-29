import React from "react";
import "./styles/App.scss";
import CoverPage from "./components/CoverPage/CoverPage";
import MenuPage from "./components/MenuPage/MenuPage";
import SamplePage from "./components/Page/SamplePage";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className='app page'>
      <CoverPage />
      <MenuPage />
      <SamplePage />
    </div>
  );
};

export default App;
