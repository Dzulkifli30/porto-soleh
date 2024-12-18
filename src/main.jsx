import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './pages/App.jsx';
import Project from './pages/project.jsx';
import Detail from './pages/detail.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/project/:id" element={<Project />} />
      <Route path="/project/detail/:id" element={<Detail />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  </BrowserRouter>
)
