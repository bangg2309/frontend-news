import React from "react";
import {AppBar, Box, Button, Container, Grid, Link, Typography, useTheme} from "@mui/material";
import {useSelector} from "react-redux";
import {loadingSelector} from "../../redux/selector/fullCategorySelector";
import {rssCategories} from "../../services/rssCategories";
import {grey} from "@mui/material/colors";
import NewsType from "../post/category-new";
import {NavLink} from "react-router-dom";
import {MAIN_CONCEPT} from "../theme/theme";
import ModeToggle from "../theme/toggleTheme";

const FullCategoryPage: React.FC = () => {
    const loading = useSelector(loadingSelector);
    const theme = useTheme();
    return (
        <>
            <Box sx={{
                marginTop:2,
                background: theme.palette.mode == 'light' ? MAIN_CONCEPT.lightNav : MAIN_CONCEPT.darkNav,
                position: 'sticky',
                display: loading ? 'block' : 'none',
                height: "100vh"
            }}>
                <Container sx={{marginY: 10}} maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={10} md={8}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={4} sx={{display: 'flex', flexDirection: 'column'}}>
                                    {rssCategories.slice(1, rssCategories.length / 3+1).map((category, index) => (
                                        <Box component={NavLink} to={category.url} minWidth={'64px'} sx={{display:'flex',justifyContent:'center',
                                        alignItems:'center',
                                            padding: '6px 8px',
                                            fontWeight: 500,
                                            fontSize: '0.875rem',
                                            lineHeight: 1.75,
                                            color:theme.palette.text.primary,
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                                borderRadius: '4px',
                                                color: MAIN_CONCEPT.main
                                        }
                                        }} key={index}>
                                                <NewsType category={category} variant={'subtitle1'}/>
                                        </Box>
                                    ))}
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} sx={{display: 'flex', flexDirection: 'column'}}>
                                    {rssCategories.slice(rssCategories.length / 3+1, rssCategories.length / 3 * 2+1).map((category, index) => (
                                        <Box component={NavLink} to={category.url}  minWidth={'64px'} sx={{display:'flex',justifyContent:'center',
                                            alignItems:'center',
                                            padding: '6px 8px',
                                            fontWeight: 500,
                                            fontSize: '0.875rem',
                                            lineHeight: 1.75,
                                            color:theme.palette.text.primary,
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                                borderRadius: '4px', color: MAIN_CONCEPT.main
                                            }
                                        }} key={index}>
                                            <NewsType category={category} variant={'subtitle1'}/>
                                        </Box>
                                    ))}
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} sx={{display: 'flex', flexDirection: 'column'}}>
                                    {rssCategories.slice(rssCategories.length / 3 * 2+1, rssCategories.length).map((category, index) => (
                                        <Box component={NavLink} to={category.url}  minWidth={'64px'} sx={{display:'flex',justifyContent:'center',
                                            alignItems:'center',
                                            padding: '6px 8px',
                                            fontWeight: 500,
                                            fontSize: '0.875rem',
                                            lineHeight: 1.75,
                                            color:theme.palette.text.primary,
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                                borderRadius: '4px', color: MAIN_CONCEPT.main
                                            }
                                        }} key={index}>
                                            <NewsType category={category} variant={'subtitle1'}/>
                                        </Box>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} md={4}>
                           <ModeToggle/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>

    );
};

export default FullCategoryPage;