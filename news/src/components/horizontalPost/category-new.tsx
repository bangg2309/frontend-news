import React, {createElement} from "react";
import ReactDOM  from "react-dom/client";
const NewsType: React.FC<{ name: string, url?: string }> = (props) => {
    return (
        <div className={"mb-1.5"}>
            <a href={props.url} style={style}  >{props.name.toUpperCase()}</a>
        </div>
    );
}
const style = {
    color: "#2d67ad",
    fontWeight: 600,
}
export default NewsType;