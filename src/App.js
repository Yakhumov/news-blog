import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";   
import Navbar from "./components/Ui/Navbar/Navbar";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>  
    </BrowserRouter>
  );
}

export default App;  
