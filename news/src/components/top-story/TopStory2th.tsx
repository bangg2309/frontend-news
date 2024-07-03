import React from "react";
import {Stack} from "@mui/material";
import TopStorySmall from "./TopStorySmall";
const list=[
    {url: "#",
    src:   "https://demo.w3layouts.com/demos_new/template_demo/13-08-2020/edulearn-demo_Free/1436978888/web/images/g1.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim."
    },
    {url: "#",
    src:   "https://demo.w3layouts.com/demos_new/template_demo/13-08-2020/edulearn-demo_Free/1436978888/web/images/g1.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim."
    }
]
const TopStory2th: React.FC<{item:{}}> = ({item}) => {
    return (
        <>
        <Stack >
            {list.map((item,index)=>(
                <TopStorySmall item={item} key={index}/>
            ))}
            </Stack>
        </>
    );
}