import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Footer/>
        </div>

    );
}

export default App;
