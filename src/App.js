import React from "react";
import "./styles/App.scss";
import CoverPage from "./components/CoverPage/CoverPage";
import MenuPage from "./components/MenuPage/MenuPage";
import Letter from "./components/Page/Letter";
import Rise from "./components/Page/Rise";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className='app'>
      <CoverPage />
      <MenuPage />
      <Letter />
      <Rise />
    </div>
  );
};

export default App;
