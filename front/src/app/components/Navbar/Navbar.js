import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { LuCherry } from 'react-icons/lu';
import { FaListUl } from 'react-icons/fa';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { BsEnvelope } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

const BurgerIcon = () => (
  <GiHamburgerMenu />
);

export default function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const menuLinks = [
    {
      href: '/',
      label: (
        <>
          <LuCherry /> L'ÉpiCerise
        </>
      )
    },
    {
      href: '/produits',
      label: (
        <>
          <FaListUl /> Produits
        </>
      )
    },
    {
      href: '/panier',
      label: (
        <>
          <RiShoppingBasket2Line /> Panier
        </>
      )
    },
    {
      href: '/contact',
      label: (
        <>
          <BsEnvelope /> Contact
        </>
      )
    },
  ];

  const handleMenuSelection = (index) => {
    setSelectedMenu(index);
    setIsBurgerMenuOpen(false);
  };

  const handleBurgerMenuToggle = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <nav className={styles.navbarContainer}>
      {/* Logo */}
      <Link href='/'>
        <img className={styles.imgLogoHeader} src="/image/Cerise.png" alt="Logo Épicerise" />
      </Link>

      {/* Burger Menu */}
      <div className={styles.burgerMenuContainer} onClick={handleBurgerMenuToggle}>
        <div className={`${styles.burgerMenu} ${isBurgerMenuOpen ? styles.open : ''}`}>
          <BurgerIcon />
        </div>

        {/* Links */}
        <ul className={`${styles.navbarContainerLinks} ${isBurgerMenuOpen ? styles.open : ''}`}>
          {menuLinks.map((menu, index) => (
            <li className={styles.navbarContainerLi} key={index} onClick={() => handleMenuSelection(index)}>
              <Link
                className={`${styles.navbarContainerLink} ${selectedMenu === index ? styles.selectedMenu : ''}`}
                href={menu.href}
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
