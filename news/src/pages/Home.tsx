import React from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";

const HomePage: React.FC = () => {
    return (<>
            {/*<Header/>*/}
            <Navbar/>
            <Container fixed maxWidth={'lg'} className={'container max-lg'}>
                <Outlet/>
            </Container>
            {/*    <MainContent/>*/}
            {/*<Footer/>*/}
        </>
    );
};

export default HomePage;