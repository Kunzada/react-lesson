import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/homePage";
import FamousLandmark from "./pages/FamousLandmark/famousLandmark";
import AboutCity from "./pages/AboutCity/aboutCity";
import OtherAttractions from "./pages/otherAttractions/otherAttractions";

function Router() {
  return (
    <>
      <BrowserRouter>
        <header className="topnav">
          <Link to="/">Home</Link>
          <Link to="/aboutcity">Фотографии города. </Link>
          <Link to="/showplace">1.Достопримечательность</Link>
          <Link to="/otherplace">2.Достопримечательность</Link>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutcity" element={<AboutCity />}></Route>
          <Route path="/showplace" element={<FamousLandmark />}></Route>
          <Route path="/otherplace" element={<OtherAttractions />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
