"use client";
import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const PageWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  color: #333;
  background-color: #fffaf5;
  overflow-x: hidden;
`;

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <Footer />
    </PageWrapper>
  );
}
