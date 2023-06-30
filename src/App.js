import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Header from './components/Header'
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
  <Router>
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
        </Routes>
      </Router>
}

export default App;
