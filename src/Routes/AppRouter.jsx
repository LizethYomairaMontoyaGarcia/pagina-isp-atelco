import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import Services from "../ServicesIsp/Services";
import Coverage from "../CoverageIsp/Coverage";
import AboutUs from "../AboutUs/AboutUs";
import Normativity from "../Normativity/Normativity";
import Pqrs from "../Pqrs/Pqrs";
import SpeedTest from "../generalComponent/SpeedTest/SpeedTest";
import Tv from "../Tv/Tv";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Servicios" element={<Services />} />
        <Route path="Cobertura" element={<Coverage />} />
        <Route path="Nosotros" element={<AboutUs />} />
        <Route path="tv" element={<Tv />} />
        <Route path="Normatividad" element={<Normativity />} />
        <Route path="Pqrs" element={<Pqrs />} />
        <Route path="Test" element={<SpeedTest />} />
        <Route path="termsAndConditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
