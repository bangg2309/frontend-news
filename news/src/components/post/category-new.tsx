import React, {createElement} from "react";
import ReactDOM from "react-dom/client";
import {Link, Typography, useTheme} from "@mui/material";
import {Variant} from "@mui/material/styles/createTypography";
import {NavLink} from "react-router-dom";
import {MAIN_CONCEPT} from "../theme/theme";
import {Category} from "../../interfaces/Category";

const NewsType: React.FC<{ category:Category, variant:Variant }> = (props) => {
    const theme= useTheme();
    return (
        <Typography color='inherit' fontWeight={'bold'} component={NavLink} to={props.category.url} variant={props.variant}>
            {props.category.name.toUpperCase()}
        </Typography>
        //   <div className={"mb-1.5"}>
        //     <Link href={props.url} variant={props.style===undefined ? "body2": props.style?.variant} fontWeight={"bold"} underline={"none"}>{props.name.toUpperCase()}</Link>
        // </div>
    );
}
export default NewsType;