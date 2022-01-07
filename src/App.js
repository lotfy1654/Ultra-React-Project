import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./Components/Index";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
