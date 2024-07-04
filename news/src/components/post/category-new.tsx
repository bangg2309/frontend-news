import React, {createElement} from "react";
import ReactDOM from "react-dom/client";
import {Link, Typography, useTheme} from "@mui/material";
import {Variant} from "@mui/material/styles/createTypography";
import {NavLink} from "react-router-dom";

const NewsType: React.FC<{ name: string, url: string, variant:Variant }> = (props) => {
    const theme= useTheme();
    return (
        <Typography color={'#2d67ad'} fontWeight={'bold'} component={NavLink} to={props.url} variant={props.variant}>
            {props.name.toUpperCase()}
        </Typography>
        //   <div className={"mb-1.5"}>
        //     <Link href={props.url} variant={props.style===undefined ? "body2": props.style?.variant} fontWeight={"bold"} underline={"none"}>{props.name.toUpperCase()}</Link>
        // </div>
    );
}
export default NewsType;