import { Card, CardActionArea, CardContent, CardMedia, Grid, Stack, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import TitlePage from "../post/TitlePage";
import { MAIN_CONCEPT } from "../theme/theme";
import React from "react";
import NewsType from "../post/category-new";

// const posts: { NewsView: NewsView } = {
//     NewsView: {
//         link: "https://www.google.com",
//         category: {
//             name: "thời sự",
//             url: "#"
//         },
//         src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg"
//         ,
//         title: "Vụ đóng mở cao tốc TPHCM",
//         description: "CSGT chốt chặn không cho ô tô lưu thông vào cao tốc TPHCM - Long Thành - Dầu Giây khiến dòng xe phải quay đầu trở lại gây nên tình trạng ùn ứ kéo dài tại nút giao thông An Phú."
//     }
// }

// const SmallPost: React.FC<{ item: {} }> = ({ item }) => {
//     return (
//         <Card component={NavLink} sx={{ boxShadow: 'unset', padding: 0 }} to={posts.NewsView.category.url} className={'mb-2 p-2 '}>
//             <CardActionArea>
//                 <CardContent color={'inherit'}>
//                     <NewsType name={posts.NewsView.category.name} url={posts.NewsView.category.url} variant={"body1"}/>
//                     <Grid container spacing={2} sx={{paddingTop:"10px"}}>
//                         <Grid item xs={6}>
//                             <CardMedia
//                                 component="img"
//                                 width="100%"
//                                 image={posts.NewsView.src}
//                                 alt={posts.NewsView.title}
//                             />
//                         </Grid>
//                         <Grid item xs={6} container alignItems="center">
//                             <TitlePage title={posts.NewsView.title} size={'body1'} url={posts.NewsView.link} />
//                         </Grid>
//                     </Grid>
//                     {/*<DescriptionPost description={posts.NewsView.description} />*/}
//                 </CardContent>
//             </CardActionArea>
//         </Card>
//     )
// }

export const StyleCard = styled("div")(({ theme }) => ({
    '&:hover': {
        color: MAIN_CONCEPT.main
        // textDecoration: "underline"
    },
    mb: 2,
}))

// export default SmallPost;
