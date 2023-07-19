"use client";
import "./globals.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Menu from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Menu />
     
      {children}
      
      <Footer />
    </>
  );
}
