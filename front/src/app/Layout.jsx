"use client";
import "./globals.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Menu from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <SearchBar />
     
      {children}
      
      <Footer />
    </>
  );
}
