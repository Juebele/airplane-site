import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Learning from './components/Learning';
import Header from './components/Header';
import Home from './components/Home';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import News from './components/News';


const App: React.FC = () => {
  return (
    <>
    <div>
      {/* This sets up URL routes for the different pages on the app */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
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
    </>
  );
};

export default App;
