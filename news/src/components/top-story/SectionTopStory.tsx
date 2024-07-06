import React from "react";
import {Divider, Grid, Stack} from "@mui/material";
import VerticalPost from "../post/VerticalPost ";
import SectionTopStory2th from "./SectionTopStory2th";
import {NewsView} from "../../interfaces/NewsView";
import TopStorySmall from "./TopStorySmall";

const bigPost: { NewsView: NewsView } = {
    NewsView: {
        link: "https://www.google.com",
        category: {
            name: "thời sự",
            url: "#"
        },
        title: "Vụ đóng mở cao tốc TPHCM - Long Thành: Cần kịch bản điều tiết giao thông",
        description: "CSGT chốt chặn không cho ô tô lưu thông vào cao tốc TPHCM - Long Thành - Dầu Giây khiến dòng xe phải quay đầu trở lại gây nên tình trạng ùn ứ kéo dài tại nút giao thông An Phú."
    }
}
const list6th = [
    {
        url: "https://www.google.com",
        src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
        title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
    },
    {
        url: "https://www.google.com",
        src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
        title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
    },
    {
        url: "https://www.google.com",
        src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
        title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
    },
    {
        url: "https://www.google.com",
        src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
        title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
    },
    {
        url: "https://www.google.com",
        src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
        title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
    },
    {
        url: "https://www.google.com",
        src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
        title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
    },
]
const list3th = [
    {
        url: "https://www.google.com",
        src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
        title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
    },
    {
        url: "https://www.google.com",
        src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
        title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
    },
    {
        url: "https://www.google.com",
        src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
        title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
    },
    {
        url: "https://www.google.com",
        src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
        title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
    },
    {
        url: "https://www.google.com",
        src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
        title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
    },
]
const list2th = [
    {
        url: "https://www.google.com",
        src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
        title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
    },
    {
        url: "https://www.google.com",
        src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg",
        title: "VỤ ĐÓNG MỞ CAO TỐC TPHCM - LONG THÀNH: CẦN KỊCH BẢN ĐIỀU TIẾT GIAO THÔNG"
    },
]
const SectionTopStory: React.FC<{ item: {} }> = ({item}) => {
    return (
        <>
            <Stack direction="column" spacing={2} >
                <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem sx={{borderColor:"rgba(201,196,196,0.79)"}}/>}>
                    <Grid item xs={4}>
                        <Stack>
                            {list6th.map((item, index) => (
                                <SectionTopStory2th item={item} key={index}/>
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={5}>
                        <Stack direction="column" spacing={2}>
                            <VerticalPost NewsView={bigPost.NewsView} titleSize={'lg'}
                            />
                            <Grid item xs={15}>
                                <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem sx={{borderColor:"rgba(201,196,196,0.79)"}} />}>
                                    {list2th.map((item, index) => (
                                        // <Grid item xs={5} key={index}>
                                        <TopStorySmall item={item}/>
                                        // </Grid>
                                    ))}
                                </Stack>
                            </Grid>
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack>
                            {list6th.map((item, index) => (
                                <SectionTopStory2th item={item} key={index}/>
                            ))}
                        </Stack>
                    </Grid>
                </Stack>

                <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem sx={{borderColor:"rgba(201,196,196,0.79)"}}/>} style={{backgroundColor:"rgba(227,227,227,0.79)"}}>
                    {list3th.map((item, index) => (
                        <Grid item xs={4} key={index}>
                            <TopStorySmall item={item}/>
                        </Grid>
                    ))}
                </Stack>
            </Stack>
        </>
    )
}
export default SectionTopStory;