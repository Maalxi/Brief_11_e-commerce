"use client";
import "./globals.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import Navbar from "./components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <SearchBar />
     
      {children}
      
      <Footer />
    </>
  );
}
