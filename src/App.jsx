import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Products from './components/Products';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import {  } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="careers" element={<Careers />} />
        <Route path="yash" element={<Products />} />

        <Route paht="products" element={<Products />} />
      </Routes>
    </BrowserRouter>

  );
}


