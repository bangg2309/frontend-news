import React, {useState} from "react";
import TitlePage from "../post/TitlePage";
import NewsType from "../post/category-new";
import {Stack} from "@mui/material";
import SubtypeItem from "./subtypeItem";
import {Category} from "../../interfaces/Category";

const catgory: { category: Category } = {
    category: {
        url: "https://www.google.com",
        name: "Thời sự",
        subType: [
            {
                name: "Subcategory 1",
                url: "#"
            },
            {
                name: "Subcategory 2",
                url: "#"
            },
            {
                name: "Subcategory 3",
                url: "#"
            },
            {
                name: "Subcategory 4",
                url: "#"
            },
        ]

    }
}
const Breedcrumb: React.FC<{ title: string }> = (props) => {
    const [categorys, setSubype] = useState(catgory.category.subType)
    const updateSubType = (selectedSubType: Category) => {
        console.log(123)
            categorys;
       let newSub= categorys?.filter((sub) => sub.name !== selectedSubType.name)
        setSubype(newSub)
        console.log(categorys)
    }
    return (
        <>
            <h2 className="mt-5 mb-1.5">
                <NewsType name={props.title} style={{color: "#2d67ad", fontSize: 26, fontWeight: 700}}/>
            </h2>
            <Stack direction={"row"} spacing={2} className={"mb-5 pb-2 border-b-2 border-b-blue-800"}>
                {/*    print subtype in category*/}
                {catgory.category.subType?.map((subtype, index) => (
                    <SubtypeItem subtype={subtype} key={index} onClick={updateSubType}/>
                ))}
            </Stack>
        </>
    )
}

export default Breedcrumb;