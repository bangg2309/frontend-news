import React, {createElement} from "react";
import ReactDOM from "react-dom/client";

const NewsType: React.FC<{ name: string, url?: string, style?: {} }> = (props) => {
    return (
        <div className={"mb-1.5"}>
            <a href={props.url} style={style(props.style)}>{props.name.toUpperCase()}</a>
        </div>
    );
}
const style = (style?: {} ) => {
    if (style) return style;
    return {
        color: "#2d67ad",
        fontWeight: 600,
    }
}
export default NewsType;