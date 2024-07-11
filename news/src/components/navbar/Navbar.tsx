import React, {useEffect, useState} from 'react';
import {AppBar, Box, Button, Container, Toolbar, useTheme} from "@mui/material";
import {MAIN_CONCEPT} from "../theme/theme";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faHouse} from "@fortawesome/free-solid-svg-icons";
import {rssCategories} from "../../services/rssCategories";
import NavItem from "./NavItem";
import {useDispatch, useSelector} from "react-redux";
import fullCategory from "../../redux/slice/fullCategory";
import {loadingSelector} from "../../redux/selector/fullCategorySelector";
import FullCategoryPage from "./FullCategory";


const Navbar: React.FC = () => {
    const dispatch = useDispatch();

    const theme = useTheme();

    const [fullPageCategory, setFullPageCategory] = React.useState<boolean>(false)

    const loading = useSelector(loadingSelector);
    const handlePopupFullCategory = () => {
        setFullPageCategory(!fullPageCategory)
        dispatch(fullCategory.actions.setLoading(!fullPageCategory));
    };
    return (
        <>
            <AppBar position="sticky"
                    sx={{
                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                        background: theme.palette.mode == 'light' ? MAIN_CONCEPT.lightNav : MAIN_CONCEPT.darkNav

                    }}>
                <Box sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{
                        paddingY:1
                    }}>
                        <Button component={NavLink} to={'/'}
                                sx={{
                                    color: theme.palette.text.primary,
                                    paddingY: '10px',

                                    textDecoration: 'none',
                                    '&:hover': {color: MAIN_CONCEPT.main}
                                }}>
                            <FontAwesomeIcon color={'inherit'} icon={faHouse}/>
                        </Button>
                        {rssCategories.slice(1, 10).map((category, index) => (
                            // <>
                            <>
                                <NavItem category={category}/>
                            </>))}
                        <Button sx={{
                            color: theme.palette.text.primary, paddingY: '10px',
                        }}
                                onClick={handlePopupFullCategory}
                        >
                            <FontAwesomeIcon icon={faBars}/>
                        </Button>
                    </Toolbar>
                </Container>
                </Box>
                <FullCategoryPage/>
            </AppBar>
        </>
    )
}
export default Navbar;