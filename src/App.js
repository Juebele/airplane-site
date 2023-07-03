import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './Assets/hangar-icon-100.png';
import './App.css';
import Main from './components/Main';
import Learning from './components/Learning';
import Header from './components/Header';
import Home from './components/Home';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import News from './components/News';


function App() {
  return (
    <div>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path="/learning"
            element={<Learning />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/news'
            element={<News />}
          />
        </Routes>
      <Footer />
      </Router>
    </div>
  )
}

export default App;
