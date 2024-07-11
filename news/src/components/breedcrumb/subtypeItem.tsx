import React from "react";
import TitlePage from "../post/TitlePage";
import {Category} from "../../interfaces/Category";
import NewsType from "../post/category-new";
import {Button, Typography, useTheme} from "@mui/material";
import {MAIN_CONCEPT} from "../theme/theme";

type SubtypeItemProps = {
    subtype: Category;
}

const SubtypeItem: React.FC<SubtypeItemProps> = ({subtype}) => {
    const theme = useTheme();
    return (
        <Button sx={{
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            '&:hover': {
                color: MAIN_CONCEPT.main
            }
        }}>
            <NewsType category={subtype} variant={"body1"}/>
        </Button>
    )
}
export default SubtypeItem;