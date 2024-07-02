import React from "react";
import TitlePage from "../horizontalPost/title-page";

type SubtypeItemProps = {
    subtype: {
        url: string;
        title: string;
    }
}

const SubtypeItem: React.FC<SubtypeItemProps> = ({subtype}) => {
    return (
        <a href={subtype.url} className={"mr-5 mb-5 mt-5"}>
            <TitlePage title={subtype.title}/>
        </a>
    )
}
export default SubtypeItem;