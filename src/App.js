import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Learning from './components/Learning';
import Header from './components/Header';
import Home from './components/Home';
import Hero from './components/Hero';
import Footer from './components/Footer';

// function App() {
//   return (
//     <div>
//     <Header/>
//     <Hero/>
//     <Main/>
//     <Footer/>
//     </div>
//   );
// }

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
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
