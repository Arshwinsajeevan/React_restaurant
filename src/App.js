import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurentlist from './components/Restaurentlist';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ViewRestaurant from './components/ViewRestaurant';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />

        <Routes>
          {/* path setting for restaurant list */}
          <Route path='/' element={<Restaurentlist />} />

          {/* path setting for view restaurant */}
          <Route path='/view-restaurant/:id' element={<ViewRestaurant/>} />
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
