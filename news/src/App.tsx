import React from 'react';
import './App.css';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryContent from './components/category/CategoryContent';
import HomeContent from "./components/home/HomeContent";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}>
                    {/*<Route index element={<CategoryContent/>}/>*/}
                    <Route index element={<HomeContent/>}/>
                </Route>
            </Routes>
        </Router>
    );
}


export default App;
