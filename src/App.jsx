import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import TopPage from "./pages/TopPage";
import FirstTower from "./pages/FirstTower";
import SecondTower from "./pages/SecondTower";
import ThirdTower from "./pages/ThirdTower";
import FourthTower from "./pages/FourthTower";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* ヘッダー */}
        <div className="p-5 border-b-2 text-xl font-medium">
          <Link to="/" className="px-4">システム名</Link>
          <Link to="second" className="px-4">設備</Link>
        </div>

        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="first" element={<FirstTower />} />
          <Route path="second" element={<SecondTower />} />
          <Route path="third" element={<ThirdTower />} />
          <Route path="fourth" element={<FourthTower />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
