import React from "react";
import NewsType from "../post/category-new";
import {Divider, Stack, useTheme} from "@mui/material";
import SubtypeItem from "./subtypeItem";
import {rssCategories} from "../../services/rssCategories";
import {Category} from "../../interfaces/Category";
import {MAIN_CONCEPT} from "../theme/theme";
import {getCategoryAllObject} from "../../services/GetData";


// let category = getCategory("Xã hội")
const Breedcrumb: React.FC<{ category: Category }> = (props) => {
    const category = getCategoryAllObject(props.category.name)
    const theme = useTheme();
    return (
        <>
            <h2 className="mt-5 mb-1.5 ml-2" style={{color: MAIN_CONCEPT.main}}>
                <NewsType category={category} variant={"h5"}/>
            </h2>
            <Stack direction={"row"} spacing={2} className={"mb-1"}>


                {category.subType?.map((subtype, index) => {
                    return (
                        <SubtypeItem subtype={subtype} key={index}/>
                    )
                })}
            </Stack>
            <Divider sx={{my: 1, color: theme.palette.primary.main}}/>
        </>
    )
}

export default Breedcrumb;