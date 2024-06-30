import React from "react";
import PostAvt from "../horizontalPost/post-avt";
import TitlePage from "../horizontalPost/title-page";
import NewsType from "../horizontalPost/category-new";
import {Box} from "@mui/material";

type RemakerItemProps = {
    remaker: {
        url: string;
        src: string;
        title: string;
        type: string;
    };
}

const RemakerItem: React.FC<RemakerItemProps> = ({remaker}) => {
    return (
        <a href={remaker.url} className={"mr-5 mb-5 mt-5"}>
            <div className="remaker-item">
                <Box sx={{width: 205}}>
                    <PostAvt src={remaker.src}/>
                </Box>
                <div className="remaker-item-content">
                    <NewsType name={remaker.type}/>
                    <TitlePage title={remaker.title} />
                </div>
            </div>
        </a>
    );
}

export default RemakerItem;