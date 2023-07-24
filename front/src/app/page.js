// "use client"

// import Image from "next/image";
// import styles from "./pageAccueil.module.css";

import Layout from "./Layout.jsx";
import Hero from "./components/Hero/Hero";
import CardContainer from "./components/CardContainer/CardContainer";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CardContainer />
    </Layout>
  );
}
