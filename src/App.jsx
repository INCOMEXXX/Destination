import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Destination from "./pages/Destination";
import Dmars from "./pages/Dmars";
import Deuropa from "./pages/Deuropa";
import Dtitan from "./pages/Dtitan";
import CrewB from "./pages/CrewB";
import CrewC from "./pages/CrewC";
import CrewD from "./pages/CrewD";
import TechB from "./pages/TechB";
import TechC from "./pages/TechC";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/destination/mars" element={<Dmars />} />
          <Route path="/destination/europa" element={<Deuropa />} />
          <Route path="/destination/titan" element={<Dtitan />} />
          <Route path="/Crew/b" element={<CrewB />} />
          <Route path="/Crew/c" element={<CrewC />} />
          <Route path="/Crew/d" element={<CrewD />} />
          <Route path="/Technology/b" element={<TechB />} />
          <Route path="/Technology/c" element={<TechC />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
