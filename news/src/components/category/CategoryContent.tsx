import React from "react";
import {Button, Grid, StyledEngineProvider} from "@mui/material";
import TitlePage from "../post/TitlePage";
import NewsType from "../post/category-new";
import HorizonePost from "../post/HorizonePost";
import BoxRemaker from "../subgest/boxRemaker";
import Breedcrumb from "../breedcrumb/breedcrumb";
import TopStory from "../top-story/TopStory";
import ModeToggle from "../theme/toggleTheme";
import {NewsView} from "../../interfaces/NewsView";

const newsPost: { NewsView: NewsView } = {
    NewsView: {
        link: "https://www.google.com",
        category: {
            name: "thời sự",
            url: "#"
        },
        src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg"
        ,
        title: "Vụ đóng mở cao tốc TPHCM - Long Thành: Cần kịch bản điều tiết giao thông",
        description: "Dự án xây dựng đường nối từ đại lộ Võ Văn Kiệt đến cao tốc TPHCM - Trung Lương dài khoảng 2,7km theo hợp đồng BOT, kinh phí hơn 1.500 tỷ đồng đình trệ đã 6 năm nay."
    }
}
const CategoryContent: React.FC = () => {
    return (
        <>
            <Breedcrumb category={newsPost.NewsView.category}/>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <TopStory item={{}}/>
                    <HorizonePost NewsView={newsPost.NewsView} titleSize={"h5"}/>
                    <HorizonePost NewsView={newsPost.NewsView} titleSize={"h5"}/>
                    <HorizonePost NewsView={newsPost.NewsView} titleSize={"h5"}/>
                    <HorizonePost NewsView={newsPost.NewsView} titleSize={"h5"}/>
                    <HorizonePost NewsView={newsPost.NewsView} titleSize={"h5"}/>
                    <BoxRemaker/>
                    <HorizonePost NewsView={newsPost.NewsView} titleSize={"h5"}/>
                    <HorizonePost NewsView={newsPost.NewsView} titleSize={"h5"}/>
                    <HorizonePost NewsView={newsPost.NewsView} titleSize={"h5"}/>
                    <HorizonePost NewsView={newsPost.NewsView} titleSize={"h5"}/>
                    <HorizonePost NewsView={newsPost.NewsView} titleSize={"h5"}/>
                </Grid>
                <Grid item xs={3}>
                    <ModeToggle/>
                </Grid>
            </Grid>
        </>
    );
}
export default CategoryContent;