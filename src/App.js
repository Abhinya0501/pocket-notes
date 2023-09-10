import "./App.css";
import HomePage from "./pages/HomePage";

import { useState, React } from "react";
import { MyContext } from "./MyContext";

function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <MyContext.Provider value={{ input, setInput }}>
        <HomePage />
      </MyContext.Provider>
    </>
  );
}

export default App;
