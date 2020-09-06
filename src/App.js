import React from "react";
import MainPage from "./Pages/MainPage";
import Footer from "./Components/Footer";
import "./App.css";
import Projects from "./Pages/Projects";
import "pure-react-carousel/dist/react-carousel.es.css";

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
