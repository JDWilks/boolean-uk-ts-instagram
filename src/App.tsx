import React, { useState } from "react";
import "../src/styles/reset.css";
import "../src/styles/index.css";
import HeaderSection from "./Components/HeaderSection";
import MainSection from "./Components/MainSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div id="root">
        <header className="main-header">
          <HeaderSection />
        </header>
        <main className="wrapper">
          <MainSection />
        </main>
      </div>
    </div>
  );
}

export default App;
