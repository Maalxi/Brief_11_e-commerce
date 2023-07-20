"use client"
import React from 'react';
import styles from './Navbar.module.css'
import Link from 'next/link';

/////// ICONS ///////
import { LuCherry } from 'react-icons/lu';
import { FaListUl } from 'react-icons/fa';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { BsEnvelope } from 'react-icons/bs';

import { useState } from "react";


export default function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState();

  const menuLinks = [
    {
      href: "/",
      label: (
        <>
          <LuCherry /> L'ÉpiCerise
        </>
      )
    },
    {
      href: "/#",
      label: (
        <>
          <FaListUl /> Produits
        </>
      )
    },
    {
      href: "/#",
      label: (
        <>
          <RiShoppingBasket2Line /> Panier
        </>
      )
    },
    {
      href: "/#",
      label: (
        <>
          <BsEnvelope /> Contact
        </>
      )
    },
  ]

  const handleMenuSelection = (index) => {
    console.log(index)
    setSelectedMenu(index)
  }

  const handleLogoClick = () => {
    setSelectedMenu(null);
  };

  return (
    <nav className={styles.navbarContainer}>
      <Link href='/'>
        <img className={styles.imgLogoHeader} src="/image/Cerise.png" alt="Logo Épicerise" />
      </Link>

      <ul className={styles.navbarContainerLinks}>
        {menuLinks.map((menu, index) => (
          <li className={styles.navbarContainerLi} key={index} onClick={() => handleMenuSelection(index)}>
            <Link
              className={`${styles.navbarContainerLink} ${selectedMenu === index ? styles.selectedMenu : ""}`}
              href={menu.href}
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
