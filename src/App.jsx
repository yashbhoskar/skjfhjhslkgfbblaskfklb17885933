import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Headers from './components/Headers';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Contact from './components/Contact';
// import {  } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
}


