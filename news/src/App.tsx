import React from 'react';
import './App.css';
import HomePage from './pages/Home';
import {Route, Routes} from "react-router-dom";
import CategoryContent from "./components/category/CategoryContent";
import ArticleDetail from "./components/articleDetail/ArticleDetail";
import ArticleContent from "./components/articleDetail/ArticleContent";
import {Category} from "./interfaces/Category";
import HomeContent from "./components/home/HomeContent";
import SearchContent from "./components/search/SearchContent";

function App() {
    return (<div className={'relative'}>
            <Routes>
                <Route path="/" element={<HomePage/>}>
                    <Route index element={<HomeContent/>}/>
                    <Route path={"/the-loai/:param"} element={<CategoryContent/>}/>
                    <Route path={"/bai-viet/:articleName"} element={<ArticleDetail/>}/>
                    <Route path={"/tim-kiem"} element={<SearchContent/>}>
                        <Route path={":search"} element={<SearchContent/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}


export default App;
