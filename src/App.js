import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Header from './components/Header'
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Header/>
    <Hero/>
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
