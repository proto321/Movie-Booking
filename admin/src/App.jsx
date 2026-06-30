import Home from './pages/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListMovies from './pages/ListMovies';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listmovies" element={<ListMovies />} />
    </Routes>
  );
};

export default App;