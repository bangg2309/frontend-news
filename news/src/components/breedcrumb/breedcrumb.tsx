import React from "react";
import NewsType from "../post/category-new";
import {Divider, Stack, useTheme} from "@mui/material";
import SubtypeItem from "./subtypeItem";
import {rssCategories} from "../../services/rssCategories";
import {Category} from "../../interfaces/Category";


const getCategory = (name: string) => {
    return rssCategories.find((category) => category.name === name) || {name: '', subType: [], url: ''};
}

let category = getCategory("Xã hội")
const Breedcrumb: React.FC<{ category:Category }> = (props) => {
    const   theme = useTheme();
    // const [categorys, setSubype] = useState(category.subType)
    // const updatedSubType=
    // const updateSubType = (selectedSubType: Category) => {
    //     console.log(123)
    //     categorys;
    //     let newSub = categorys?.filter((sub) => sub.name !== selectedSubType.name)
    //     setSubype(newSub)
    //     console.log(categorys)
    // }
    return (
        <>
            <h2 className="mt-5 mb-1.5">
                <NewsType url={props.category.url} name={props.category.name} variant={"h5"}/>
            </h2>
            <Stack direction={"row"} spacing={2} className={"mb-1"}>

                {/*    print subtype in category*/}
                {category.subType?.map((subtype, index) => (
                    <SubtypeItem subtype={subtype} key={index}/>
                ))}
            </Stack>
            <Divider sx={{my: 1, color: theme.palette.primary.main}}/>
        </>
    )
}

export default Breedcrumb;