import React from "react";
import "./styles/App.scss";
import CoverPage from "./components/CoverPage/CoverPage";
import MenuPage from "./components/MenuPage/MenuPage";
import Letter from "./components/Page/Letter";
import Rise from "./components/Page/Rise";
import Drawing from "./components/Page/Drawing";
import Ad from "./components/Page/Ad";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className='app'>
      <CoverPage />
      <MenuPage />
      <Letter />
      <Rise />
      <Drawing />
      <Ad />
    </div>
  );
};

export default App;
