"use client"

import Image from "next/image";
import styles from "./pageAccueil.module.css";

import Layout from "./Layout.jsx";
import Hero from "./components/Hero/Hero";
import CategoryCard from "./components/CategoryCard/CategoryCard";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CategoryCard />
    </Layout>
  );
}
