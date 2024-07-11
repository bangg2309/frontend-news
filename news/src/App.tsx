import React from 'react';
import './App.css';
import HomePage from './pages/Home';
import {Route, Routes} from "react-router-dom";
import CategoryContent from "./components/category/CategoryContent";
import ArticleDetail from "./components/articleDetail/ArticleDetail";
import ArticleContent from "./components/articleDetail/ArticleContent";
import {Category} from "./interfaces/Category";
const category: Category = {
    name: "Giai tri",
    url: "/giai_tri",
    rss: "giai-tri-36.rss"
}
function App() {
    return (<div className={'relative'}>
            <Routes>
                <Route path="/" element={<HomePage/>}>
                    <Route index element={<CategoryContent category={category}/>}/>
                    <Route path={"/:articleName"} element={<ArticleDetail/>}/>
                </Route>
            </Routes>
        </div>
    );
}


export default App;
