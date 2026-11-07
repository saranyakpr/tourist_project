import React from "react";
import Homenavbar from "../component/Homenavbar";
import Hero from "../component/Hero";
import Welcome from "../component/Welcome";
import Promise from "../component/Promise"; 
import Footer from "../component/Footer";
import Scrolltop from "../component/Scrolltop";
import Map from "../component/Map";
export default function Home(){
    return(
        <>
        <Homenavbar></Homenavbar>
        <Hero></Hero>
        <Welcome></Welcome>
        <Promise></Promise>
        <Scrolltop></Scrolltop>
        <Map></Map>
    <Footer></Footer>
        </>
    )
}