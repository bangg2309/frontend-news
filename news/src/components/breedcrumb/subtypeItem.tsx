import React from "react";
import TitlePage from "../post/TitlePage";
import {Category} from "../../interfaces/Category";

type SubtypeItemProps = {
    subtype: Category;
    onClick?:(subtype: Category)=> void
}

const SubtypeItem: React.FC<SubtypeItemProps> = ({subtype, onClick}) => {
    // const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    //     onClick(subtype); // Invoke the onClick function passed as prop with subtype
    // };
    return (
        <a href={subtype.url} className={"mr-5 mb-5 mt-5"}>
            <TitlePage title={subtype.name} size={"h5"} url={subtype.url}  />
        </a>
    )
}
export default SubtypeItem;