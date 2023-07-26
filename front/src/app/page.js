"use client"

import Layout from "./Layout.jsx";
import Hero from "./components/Hero/Hero";
import CardContainer from "./components/CardContainer/CardContainer";
import { useEffect } from "react";

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
      <Hero />
      <CardContainer />
    </Layout>
  );
}
