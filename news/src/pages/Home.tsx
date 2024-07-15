import React, {useEffect} from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import {useDispatch} from "react-redux";

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    //url
    return (<>
            <Header/>
            <Navbar/>
            <Container fixed maxWidth={'lg'}>
                <Outlet/>
            </Container>
            <Footer/>
        </>
    );
};

export default HomePage;