import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Dashboard } from './pages/';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/search" element={<Dashboard />}></Route>
        <Route path="/profiles" element={<Dashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </div>
  );
}
