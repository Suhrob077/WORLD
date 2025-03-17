import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Artifacts from "./Component/Artifacts";
import Home from "./Component/Home";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <Navbar setActiveSection={setActiveSection} />
    </>
  );
}

export default App;
