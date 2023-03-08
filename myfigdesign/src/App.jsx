import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout.jsx";
import AboutPage from "./routes/about/about.jsx";
import LandingPage from "./routes/LandingPage.jsx";
import MyWorkPage from "./routes/myWork/MyWorkPage.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="my-work" element={<MyWorkPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
