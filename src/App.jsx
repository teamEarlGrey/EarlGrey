import React from "react";
import useMedia from "use-media";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import TopPage from "./pages/TopPage";
import FirstTower from "./pages/FirstTower";
import SecondTower from "./pages/SecondTower";
import ThirdTower from "./pages/ThirdTower";

const App = () => {
  const isWide = useMedia({ minWidth: "1300px" });
  return (
    <BrowserRouter>
        <div className={`${isWide ? `w-[1300px] mx-auto` : `w-auto`}`}>
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="first" element={<FirstTower />} />
            <Route path="second" element={<SecondTower />} />
            <Route path="third" element={<ThirdTower />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;
