import React from 'react';
import './App.css';
import HomePage from './pages/Home';
import {Route, Routes} from "react-router-dom";
import CategoryContent from "./components/category/CategoryContent";
import ArticleDetail from "./components/articleDetail/ArticleDetail";
import ArticleContent from "./components/articleDetail/ArticleContent";
import {Category} from "./interfaces/Category";
import Profile from "./components/profile/Profile";
import HomeContent from "./components/home/HomeContent";
import SearchContent from "./components/search/SearchContent";
import MainContent from "./components/home/HomeContent";
import ProfileDetail from "./components/profile/ProfileDetail";
import SavePost from "./components/profile/savePost/savePost";

function App() {
    return (<div className={'relative'}>
            <Routes>
                <Route path="/" element={<HomePage/>}>
                    <Route index element={<HomeContent/>}/>
                    <Route path={"/the-loai/:param"} element={<CategoryContent/>}/>
                    <Route path={"/bai-viet/:articleName"} element={<ArticleDetail/>}/>
                    <Route path={"/tai-khoan"} element={<Profile/>}>
                        <Route path={""} element={<ProfileDetail/>}/>
                        <Route path={"bai-viet-da-luu"} element={<SavePost/>}/>
                    </Route>
                    <Route path={"/tim-kiem"} element={<SearchContent/>}>
                        <Route path={":search"} element={<SearchContent/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}


export default App;
