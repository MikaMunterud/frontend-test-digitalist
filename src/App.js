import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Homepage";
import ProgramDetail from "./pages/ProgramDetail";
import "./sass/App.scss";
import { useEffect, useState } from "react";

function App() {
  const [vh, setVh] = useState();

  useEffect(
    function () {
      setVh(window.innerHeight * 0.01);
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
    [vh]
  );

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
