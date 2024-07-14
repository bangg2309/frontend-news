import React from "react";
import {Box, Divider, Grid, Stack} from "@mui/material";
import VerticalPost from "../post/VerticalPost ";
import SectionTopStory2th from "./SectionTopStory2th";
// import {NewsView} from "../../interfaces/NewsView";
import TopStorySmall from "./TopStorySmall";
import {RSSItem} from "../../interfaces/RSSItem";

const bigPost: { NewsView: RSSItem } = {
    NewsView: {
        link: "https://www.google.com",
        category: {
            name: "thời sự",
            url: "#",
            rss: '/thoi-su.rss'
        },
        title: "Vụ đóng mở cao tốc TPHCM - Long Thành: Cần kịch bản điều tiết giao thông",
        description: "CSGT chốt chặn không cho ô tô lưu thông vào cao tốc TPHCM - Long Thành - Dầu Giây khiến dòng xe phải quay đầu trở lại gây nên tình trạng ùn ứ kéo dài tại nút giao thông An Phú."
        ,
        thumb: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/7/1/tai-nan-giao-thong-nghiem-trong-o-hai-duong-2-nguoi-thiet-mang-3782.jpg?width=360&s=pDt4P2RKknOAooQwjksqAg"
    }
}

const SectionTopStory: React.FC<{ item: RSSItem[] }> = ({item}) => {
    const bigPost = item.slice(0, 1);
    const list2th = item.slice(1, 3);
    const list3th = item.slice(3, 6);
    const list6th = item.slice(6, 11);
    const list4th = item.slice(12, 15);
    return (
        <>
            <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={2}>
                    <Grid item xs={3}>
                        <Stack>
                            {list6th.map((item, index) => (
                                <SectionTopStory2th item={item} key={index}/>
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction="column" spacing={2}>
                            {
                                bigPost.map((item, index) => (
                                    <VerticalPost NewsView={item} key={index}/>
                                ))
                            }
                            <Grid item xs={15}>
                                <Stack direction="row" spacing={2}>
                                    <Grid item xs={6}>
                                        {list2th.map((item, index) => (
                                            <SectionTopStory2th item={item} key={index}/>
                                        ))}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {list2th.map((item, index) => (
                                            <SectionTopStory2th item={item} key={index}/>
                                        ))}
                                    </Grid>
                                </Stack>
                            </Grid>
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack>
                            {list4th.map((item, index) => (
                                <TopStorySmall item={item} key={index}/>
                            ))}
                        </Stack>
                    </Grid>
                </Stack>

                <Stack direction="row" spacing={2}>
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