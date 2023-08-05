import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Meditation from "./pages/Meditation/Meditation";
import SessionContext from "./context/SessionContext";
import { useState } from "react";
function App() {
  const [meditationMinutes, setMeditationMinutes] = useState(15);
  const [scenography, setScenography] = useState("");
  return (
    <>
      <SessionContext.Provider
        value={{
          meditationMinutes,
          setMeditationMinutes,
          scenography,
          setScenography,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/Meditation" element={<Meditation></Meditation>} />
          </Routes>
        </Router>
      </SessionContext.Provider>
    </>
  );
}

export default App;
