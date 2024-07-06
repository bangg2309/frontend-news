import React from 'react';
import './App.css';
import HomePage from './pages/Home';
import {Route, Routes} from "react-router-dom";
import CategoryContent from "./components/category/CategoryContent";
import ArticleContent from "./components/articleDetail/ArticleContent";
import ArticleDetail from "./components/articleDetail/ArticleDetail";
import HomeContent from "./components/home/HomeContent";

function App() {
    return (
            <Routes>
                <Route path="/" element={<HomePage/>}>
                    {/*<Route index element={<CategoryContent/>}/>*/}
                    <Route index element={<HomeContent/>}/>
                    <Route path={'/post'} element={<ArticleDetail/>}/>
                </Route>

            </Routes>
    );
}


export default App;
