import React from "react";
import {Button, Grid, StyledEngineProvider} from "@mui/material";
import TitlePage from "../post/TitlePage";
import NewsType from "../post/category-new";
import HorizonePost from "../post/HorizonePost";
import BoxRemaker from "../subgest/boxRemaker";
import Breedcrumb from "../breedcrumb/breedcrumb";
import TopStory from "../top-story/TopStory";
import ModeToggle from "../theme/toggleTheme";
import SectionTopStory from "../top-story/SectionTopStory";


const CategoryContent: React.FC = () => {
    return (
        <>
            {/*<Breedcrumb title={"THỜI SỰ"}/>*/}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SectionTopStory item={{}}/>
                </Grid>
            </Grid>
        </>
    );
}
export default CategoryContent;