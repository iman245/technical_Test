import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/prod' element={<ProductDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
