import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { ContactMe } from "./views/ContactMe";
const Layout = () =>{
    return(
        <div>
            <BrowserRouter> 
                <Routes>
                    <Route element ={<Home/>} path="/"/>
                    <Route element ={<ContactMe/>} path="/contact-me"/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout