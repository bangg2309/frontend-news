import React from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import {Outlet} from "react-router-dom";
import {Box, Container} from "@mui/material";
import {rssCategories} from "../services/rssCategories";
import FullCategoryPage from "../components/navbar/FullCategory";
import {useSelector} from "react-redux";
import {loadingSelector} from "../redux/selector/fullCategorySelector";

const HomePage: React.FC = () => {
    const loading = useSelector(loadingSelector);
    return (<>
            <Header/>
                <Navbar/>
            <Container fixed maxWidth={'lg'}>
                <Outlet/>
            </Container>


            {/*    <MainContent/>*/}
            <Footer/>
        </>
    );
};

export default HomePage;