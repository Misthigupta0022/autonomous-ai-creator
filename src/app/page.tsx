"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import ChatBox from "@/components/ChatBox";
import ResponseBox from "@/components/ResponseBox";

export default function Home() {
  const [response, setResponse] = useState("");

  return (
    <>
      <Navbar />
      <Hero />
      <ChatBox onResponse={setResponse} />
      <ResponseBox response={response} />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}