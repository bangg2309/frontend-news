import React, {createElement} from "react";
import ReactDOM from "react-dom/client";
import {Link, Typography, useTheme} from "@mui/material";
import {Variant} from "@mui/material/styles/createTypography";
import {NavLink} from "react-router-dom";
import {MAIN_CONCEPT} from "../theme/theme";
import {Category} from "../../interfaces/Category";

const NewsType: React.FC<{ category:Category, variant:Variant }> = (props) => {
    return (
        <Typography color='inherit' fontWeight={'bold'} component={NavLink} to={props.category.url} variant={props.variant}>
            {props.category.name.toUpperCase()}
        </Typography>
    );
}
export default NewsType;