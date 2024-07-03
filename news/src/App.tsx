import React from 'react';
import './App.css';
import HomePage from './pages/Home';
import {Route, Routes} from "react-router-dom";
import CategoryContent from "./components/category/CategoryContent";

function App() {
    return (
            <Routes>
                <Route path="/" element={<HomePage/>}>
                    <Route index element={<CategoryContent/>}/>
                </Route>
            </Routes>
    // </Container>
    );
}


export default App;
