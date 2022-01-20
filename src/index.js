import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./functionBased/components/TodoContainer";
import "./functionBased/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./functionBased/pages/About";
import NotMatch from "./functionBased/pages/NotMatch";
import Navbar from "./functionBased/components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
