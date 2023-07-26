"use client"
import React, { useEffect } from 'react';
import styles from './Navbar.module.css'
import Link from 'next/link';

/////// ICONS ///////
import { LuCherry } from 'react-icons/lu';
import { FaListUl } from 'react-icons/fa';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { BsEnvelope } from 'react-icons/bs';

import { useState } from "react";


export default function Navbar() {
  
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    const savedSelectedMenu = localStorage.getItem('selectedMenu');
    if (savedSelectedMenu !== null) {
      setSelectedMenu(JSON.parse(savedSelectedMenu));
    } else {
      setSelectedMenu(0);
    }
  }, [])

  const handleMenuSelection = (index) => {
    setSelectedMenu(index === selectedMenu ? selectedMenu : index);
    localStorage.setItem('selectedMenu', JSON.stringify(index === selectedMenu ? selectedMenu : index));
  };
  
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
      href: "/produits",
      label: (
        <>
          <FaListUl /> Produits
        </>
      )
    },
    {
      href: "/panier",
      label: (
        <>
          <RiShoppingBasket2Line /> Panier
        </>
      )
    },
    {
      href: "/contact",
      label: (
        <>
          <BsEnvelope /> Contact
        </>
      )
    },
  ];


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