import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';

function App() {
    return (
        <div className="App ml-auto mr-auto" style={style}>
            <HomePage/>
        </div>

    );
}

const style = {
    background: '#fff',
    maxWidth: 1140,
}

export default App;
