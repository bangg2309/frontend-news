import React from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Footer />
        </div>

    );
};

export default HomePage;