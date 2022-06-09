import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Dashboard from './Dashboard';
import About from './About';
import Nav from './Nav';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Profile />} />
          <Route path="/dashboard/:name" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
