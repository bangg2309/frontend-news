import React from 'react';
import './App.css';
import HomePage from './pages/Home';
import {Route, Routes} from "react-router-dom";
import CategoryContent from "./components/category/CategoryContent";
import ArticleDetail from "./components/articleDetail/ArticleDetail";

function App() {
    return (
            <Routes>
                <Route path="/" element={<HomePage/>}>
                    {/*<Route index element={<CategoryContent/>}/>*/}
                    <Route path={"/:articleName"} element={<ArticleDetail/>}/>
                </Route>
            </Routes>
    // </Container>
    );
}


export default App;
