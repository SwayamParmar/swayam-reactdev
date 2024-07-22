import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          {/* Add more routes here */}
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
