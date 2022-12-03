import "./App.css";
import Main from "./Components/Index/Main";
import Header from "./Components/Base/Header";
import Discover from "./Components/Index/Discover";
import GetStarted from "./Components/Index/GetStarted";
import EnergyLevel from "./Components/Index/EnergyLevel";

import { Route, Routes } from "react-router-dom";
import StressLevel from "./Components/Index/StressLevel";
import WhatNext from "./Components/Index/WhatNext";
import SecondReminder from "./Components/Index/SecondReminder";
import AllSet from "./Components/Index/AllSet";
import Results from "./Components/Index/Results";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/getStarted" element={<GetStarted />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/energyLevel" element={<EnergyLevel />} />
        <Route path="/stressLevel" element={<StressLevel />} />
        <Route path="/whatNext" element={<WhatNext />} />
        <Route path="/secondReminder" element={<SecondReminder />} />
        <Route path="/allSet" element={<AllSet />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
