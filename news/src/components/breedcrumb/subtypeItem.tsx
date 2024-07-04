import React from "react";
import TitlePage from "../post/TitlePage";
import {Category} from "../../interfaces/Category";
import NewsType from "../post/category-new";

type SubtypeItemProps = {
    subtype: Category;
    onClick?:(subtype: Category)=> void
}

const SubtypeItem: React.FC<SubtypeItemProps> = ({subtype, onClick}) => {
    // const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    //     onClick(subtype); // Invoke the onClick function passed as prop with subtype
    // };
    return (
            <NewsType name={subtype.name} variant={ "body1"} url={subtype.url}  />
    )
}
export default SubtypeItem;