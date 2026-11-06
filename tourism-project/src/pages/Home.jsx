import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Welcome from "../component/Welcome";
import Promise from "../component/Promise"; 
import Footer from "../component/Footer";
import Scrolltop from "../component/Scrolltop";
import Map from "../component/map";
export default function Home(){
    return(
        <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Welcome></Welcome>
        <Promise></Promise>
        <Scrolltop></Scrolltop>
        <Map></Map>
    <Footer></Footer>
        </>
    )
}