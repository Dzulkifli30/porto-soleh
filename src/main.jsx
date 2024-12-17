import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './pages/App.jsx';
import Project from './pages/project.jsx';
import Home from './pages/home.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/project/:id" element={<Project />} />
    </Routes>
  </BrowserRouter>
)
