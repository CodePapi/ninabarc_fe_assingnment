import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleBookDetails from './pages/SingleBookDetails';
import logo from './logo.svg';
import './App.css';
import Drawer from './components/Drawer';






function App() {
  return (
    <Router>
      <Drawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:bookId" element={<SingleBookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
