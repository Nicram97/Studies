import React from 'react';
import Navbar from './components/navbar/Navbar'
import Content from './components/content/content'
import Footer from './components/footer/footer';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}

export default App;
