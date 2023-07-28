"use client"

import Layout from "./Layout.jsx";
import Hero from "./components/Hero/Hero";
import CardContainer from "./components/CardContainer/CardContainer";
import { useEffect } from "react";
import PromoBanner from "./components/PromoBanner/PromoBanner.js";

export default function Home() {

  useEffect(() => {

    if (typeof window !== 'undefined') {
      const pannier = localStorage.getItem('pannier');
      if (!pannier) {

        localStorage.setItem('pannier', JSON.stringify([]));
      }
    }
  }, []);



  return (
    <Layout>
      <PromoBanner />
      <Hero />
      <CardContainer />
    </Layout>
  );
}
