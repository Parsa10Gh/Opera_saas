// src/app/page.tsx
"use client";

import React from "react";
import BlogList from "../components/blog/BlogList";
import { blogPosts } from "../helper/data";
import ImageCarousel from "@/components/customersinfo/ImageCarousel";
import Hero from "@/components/hero/Hero";
import ServicesCards from "@/components/servicescards/ServicesCards";
import AboutUsVideo from "@/components/aboutusvideo/AboutUsVideo";
import Cards from "../components/cards/Cards";
import Footer from "../components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ContactUsLanding from "../components/contactus/ContactUsLanding";
import BackToTopButton from "@/components/BackToTopButton";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <ScrollBar/> */}
      <Hero />
      <div
        id="container"
        className="bg-[url('/ascdvfv.svg')] bg-cover shadow-[0px_-70px_100px_15px]"
      >
        <ServicesCards />
        <Cards />
        <BlogList blogPosts={blogPosts} />
        <ImageCarousel />
        <AboutUsVideo />
        <ContactUsLanding />
        <div
          id="footerContainer"
          className="bg-[url('/Group-8738.svg')] bg-cover pt-16 pb-1"
        >
          <Footer />
        </div>
        <BackToTopButton />
      </div>
      {/* <ConfirmPassword></ConfirmPassword> */}
    </>
  );
};

export default Home;
