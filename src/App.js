import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import { useState, React } from "react";
import { MyContext } from "./MyContext";

function App() {
  const [input, setInput] = useState("");
  return (
    <MyContext.Provider value={{ input, setInput }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
