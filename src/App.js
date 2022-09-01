import React from 'react';
// Packages
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
// Packages

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Components

// Pages
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';


const App = () => {
  return (
    <Box width='400px' sx={{width: { xl: '1488px' }}} m='auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} /> 
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
