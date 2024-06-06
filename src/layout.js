import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { ContactMe } from "./views/ContactMe";
import { Navbar } from "./components/navbar";
import logoo from "../src/img/logo.png"
import { AboutUs } from "./views/aboutUs";
import { Footer } from "./components/footer";

const Layout = () =>{
    const menu = [
        { label: "Home", url: "/" },
        { label: "Services", url: "/" },
        { label: "Contact Us", url: "/" },
        { label: "About Us", url: "/" },
        { label: "Sustainability", url: "/portfolio" }
    ];
    return(
        <div>
            <BrowserRouter> 
            <Navbar items={menu} logo={logoo} />
                <Routes>
                    <Route element ={<Home/>} path="/"/>
                    <Route element ={<ContactMe/>} path="/contact-me"/>
                    <Route element ={<AboutUs/>} path="/about-us"/>
                </Routes>
            <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Layout