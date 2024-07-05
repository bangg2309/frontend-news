import React from "react";
import {Grid, Stack} from "@mui/material";
import VerticalPost from "../post/VerticalPost ";
import TopStorySmall from "./TopStorySmall";
import {RSSItem} from "../../interfaces/RSSItem";

// const bigPost: { NewsView: RSSItem } = {
//     NewsView: {
//         link: "https://www.google.com",
//         category: {
//             name: "thời sự",
//             url: "#"
//         },
//         thumb: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg"
//         ,
//         title: "Vụ đóng mở cao tốc TPHCM - Long Thành: Cần kịch bản điều tiết giao thông",
//         description: "CSGT chốt chặn không cho ô tô lưu thông vào cao tốc TPHCM - Long Thành - Dầu Giây khiến dòng xe phải quay đầu trở lại gây nên tình trạng ùn ứ kéo dài tại nút giao thông An Phú."
//     }
// }
// const list2th = [
//     {
//         url: "https://www.google.com",
//         src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
//         title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
//     },
//     {
//         url: "https://www.google.com",
//         src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
//         title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
//     },
// ]
// const list3th = [
//     {
//         url: "https://www.google.com",
//         src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
//         title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
//     },
//     {
//         url: "https://www.google.com",
//         src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
//         title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
//     },
//     {
//         url: "https://www.google.com",
//         src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
//         title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
//     }
// ]
const TopStory: React.FC<{ item: RSSItem[] }> = ({item}) => {
    // item.map((item) => {
    //     console.log(item)
    // })
    const bigPost = item.slice(0, 1);
    const list2th = item.slice(1, 3);
    const list3th = item.slice(3, 6);
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Stack>
                        {
                            bigPost.map((item, index) => (
                                <VerticalPost NewsView={item} key={index}/>
                            ))
                        }
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack>
                        {list2th.map((item, index) => (
                            <TopStorySmall item={item} key={index}/>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                {list3th.map((item, index) => (
                    <Grid item xs={4} key={index}>
                        <TopStorySmall item={item}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default TopStory;