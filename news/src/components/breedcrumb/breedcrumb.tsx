import React from "react";
import NewsType from "../post/category-new";
import {Divider, Stack, useTheme} from "@mui/material";
import SubtypeItem from "./subtypeItem";
import {rssCategories} from "../../services/rssCategories";
import {Category} from "../../interfaces/Category";
import {MAIN_CONCEPT} from "../theme/theme";




// let category = getCategory("Xã hội")
const Breedcrumb: React.FC<{ category: Category }> = (props) => {
    console.log(props.category)
    const theme = useTheme();
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
            <h2 className="mt-5 mb-1.5 ml-2" style={{color:MAIN_CONCEPT.main}}>
                <NewsType category={props.category} variant={"h5"}/>
            </h2>
            <Stack direction={"row"} spacing={2} className={"mb-1"}>

                {/*    print subtype in category*/}
                {props.category.subType?.map((subtype, index) => (
                    <SubtypeItem subtype={subtype} key={index}/>
                ))}
            </Stack>
            <Divider sx={{my: 1, color: theme.palette.primary.main}}/>
        </>
    )
}

export default Breedcrumb;