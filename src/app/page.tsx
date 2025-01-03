'use client'
import NavBar from "@/Components/Navbar";
import AuthoreCard from "@/Components/AuthoreCard";
import React from "react";
import Mega from "@/Components/Mega";
import Feature from "@/Components/Feature";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
   <div>
    <NavBar/>
    <Feature/>
    <Mega/>
    <AuthoreCard/>
    <Footer/>
   </div>
  );
}
