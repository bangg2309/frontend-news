import React from 'react';
import './App.css';
import HomePage from './pages/Home';
import {Route, Routes} from "react-router-dom";
import CategoryContent from "./components/category/CategoryContent";
import ArticleDetail from "./components/articleDetail/ArticleDetail";
import ArticleContent from "./components/articleDetail/ArticleContent";
import {Category} from "./interfaces/Category";
import MainContent from "./pages/MainContent";
const category: Category = {
    name: "Giai tri",
    url: "/giai_tri",
    rss: "giai-tri-36.rss"
}
const categories = [
    { name: "Giai tri", url:'/giai_tri', rss: "giai-tri-36.rss" },
    { name: "The thao",url:'/the_thao', rss: "the-thao-37.rss" },
    { name: "Kinh doanh",url:'/kinh_doanh', rss: "kinh-doanh-38.rss" },
    { name: "Sức khỏe",url:'/suc_khoe', rss: "suc-khoe-39.rss" },
    { name: "Giáo dục",url:'/giao_duc', rss: "giao-duc-40.rss" },
    { name: "Công nghệ",url:'/cong_nghe', rss: "cong-nghe-41.rss" },
    { name: "Thế giới",url:'/the_gioi', rss: "the-gioi-42.rss" },
    { name: "Thời trang",url:'/thoi_trang', rss: "thoi-trang-43.rss" },
    { name: "Ẩm thực",url:'/am_thuc', rss: "am-thuc-44.rss" },
    { name: "Du lịch",url:'/du_lich', rss: "du-lich-45.rss" }
];
function App() {
    return (<div className={'relative'}>
            <Routes>
                <Route path="/" element={<HomePage/>}>
                    <Route index element={<MainContent categories={categories}/>}/>
                    <Route index element={<CategoryContent category={category}/>}/>
                    <Route path={"/:articleName"} element={<ArticleDetail/>}/>
                </Route>
            </Routes>
        </div>
    );
}


export default App;
