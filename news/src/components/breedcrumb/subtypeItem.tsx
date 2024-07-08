import React from "react";
import TitlePage from "../post/TitlePage";
import {Category} from "../../interfaces/Category";
import NewsType from "../post/category-new";

type SubtypeItemProps = {
    subtype: Category;
}

const SubtypeItem: React.FC<SubtypeItemProps> = ({subtype}) => {
    return (
            <NewsType category={subtype} variant={ "body1"}  />
    )
}
export default SubtypeItem;