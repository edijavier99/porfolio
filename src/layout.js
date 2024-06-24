import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { Navbar } from "./components/navbar";
import logoo from "../src/img/logo.png"
import { AboutUs } from "./views/aboutUs";
import { Footer } from "./components/footer";
import {Sustainibility}  from "./views/Sustainibility"

const Layout = () =>{
    const menu = [
        { label: "Home", url: "/" },
        { label: "Services", url: "/" },
        { label: "About Us", url: "/about-us" },
        { label: "Sustainability", url: "/sustainibility" }
    ];
    return(
        <div>
            <BrowserRouter> 
            <Navbar items={menu} logo={logoo} />
                <Routes>
                    <Route element ={<Home/>} path="/"/>
                    <Route element ={<Sustainibility/>} path="/Sustainibility"/>
                    <Route element ={<AboutUs/>} path="/about-us"/>
                </Routes>
            <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Layout