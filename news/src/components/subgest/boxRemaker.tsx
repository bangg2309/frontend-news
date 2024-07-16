import React from "react";
import {Box, ListProps} from "@mui/material";
import RemakerItem from "./remakerItem";
import {RSSItem} from "../../interfaces/RSSItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BoxRemaker: React.FC<{ item: RSSItem[] }> = (props) => {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        // initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (<>
            <p style={style} className={"uppercase border-b"}>Đáng chú ý</p>
            <Box sx={{maxHeight: 250}}>
                <Slider {...settings} >
                    {props.item.map((item, index) => {
                        return (
                            <Box key={index}
                                 sx={{paddingLeft: index === 0 ? 0 : 1, height: "fit-content"}}
                            >
                                <RemakerItem item={item}/>
                            </Box>
                        )
                    })}
                </Slider>
            </Box>
        </>
    )
}
const style = {
    color: "#2d67ad",
    fontWeight: 600,
    fontSize: "1.5rem"

}
export default BoxRemaker;