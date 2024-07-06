import React from "react";
import {Button, Grid, StyledEngineProvider} from "@mui/material";
import SectionTopStory from "../top-story/SectionTopStory";


const HomeContent: React.FC = () => {
    return (
        <>
            {/*<Breedcrumb  category={"bla bal"}/>*/}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SectionTopStory item={{}}/>
                </Grid>
                {/*<Grid item xs={3}>*/}
                    {/*<ModeToggle/>*/}
                {/*</Grid>*/}
            </Grid>
        </>
    );
}
export default HomeContent;