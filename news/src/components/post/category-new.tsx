import React, {createElement} from "react";
import ReactDOM from "react-dom/client";
import {Link} from "@mui/material";

const NewsType: React.FC<{ name: string, url?: string, style?: {variant:"h3"|"body2"} }> = (props) => {
    return (
        <div className={"mb-1.5"}>
            <Link href={props.url} variant={props.style===null ? "body2": props.style?.variant} fontWeight={"bold"} underline={"none"}>{props.name.toUpperCase()}</Link>
        </div>
    );
}
export default NewsType;