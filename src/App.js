import React from "react";
import MainPage from "./Pages/MainPage";
import Footer from "./Components/Footer";
import "./App.css";
import Projects from "./Pages/Projects";
// import HomepageLayout from './Components/HomepageLayout';

function App() {
  return (
    <div className="App">
      <MainPage />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
