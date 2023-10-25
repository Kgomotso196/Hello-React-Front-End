import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/greeting';

const App = () => (
  <Routes>
    <Route path="/" element={<Greeting />} />
  </Routes>
);

export default App;
