import React from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import MainContent from "./MainContent";
import {CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";
import TitlePage from "../components/post/TitlePage";
import light from "../components/theme/theme";

const HomePage: React.FC = () => {
    return (
        <React.StrictMode>
            <ThemeProvider theme={light}>
                <CssBaseline/>
                {/*<Header/>*/}
                {/*<Navbar/>*/}
                <MainContent/>
                {/*<Footer/>*/}
            </ThemeProvider>
        </React.StrictMode>
    );
};

export default HomePage;