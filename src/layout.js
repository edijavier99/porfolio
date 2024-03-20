import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { ContactMe } from "./views/ContactMe";
import { Navbar } from "./components/navbar";
import logoo from "../src/img/logo.png"
import { AboutUs } from "./views/aboutUs";


const Layout = () =>{
    const menu = [
        { label: "Home", url: "/" },
        { label: "Contact Us", url: "/contact-me" },
        { label: "About Us", url: "/about-us" },
        { label: "Portfolio", url: "/portfolio" }
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
            </BrowserRouter>
        </div>
    )
}

export default Layout