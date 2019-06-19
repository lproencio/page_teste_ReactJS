import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './app.css'

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter> 
      < Header/> 
      < Routes/>
      < Nav/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
