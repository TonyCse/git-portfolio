import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./assets/logo.svg";
import "./App.css";
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path='/' element={<Profile userName="TonyCse" />} />
          <Route path='/projects' element={<Projects userName="TonyCse" />} />
          <Route path='/projects/:name' element={<ProjectDetail userName="TonyCse" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
