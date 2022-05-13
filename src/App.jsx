import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Users from "./Users";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="about" className={'text-red-600'}>
          About
        </Link>
        <Link to="users">Users</Link>

        <Routes>
          <Route path="/" />

          <Route path="about" element={<About />} />

          <Route path="users" element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
