"use client";
import "./globals.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Menu from "./components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}
