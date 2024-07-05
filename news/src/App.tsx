import React from 'react';
import './App.css';
import HomePage from './pages/Home';
import {Route, Routes} from "react-router-dom";
import CategoryContent from "./components/category/CategoryContent";
import ArticleContent from "./components/articleDetail/ArticleContent";
import ArticleDetail from "./components/articleDetail/ArticleDetail";
import {Category} from "./interfaces/Category";
const category: Category = {
    name: "Giai tri",
    url: "/giai_tri",
    rss: "giai-tri-36.rss"
}
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}>
                    <Route path={'/category'} element={<CategoryContent category={category}/>}/>
                    <Route path={'/post'} element={<ArticleDetail/>}/>
                </Route>
            </Routes>
        </Router>
    );
}


export default App;
