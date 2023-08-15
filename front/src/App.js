import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import AstronautList from './components/AstronautList';
import AstronautForm from './components/AstronautForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AstronautList />} />
        <Route path='/add' element={<AstronautForm />} />
        <Route path='/edit/:id' element={<AstronautForm />} />
      </Routes>
    </Router>
  );
}

export default App;
