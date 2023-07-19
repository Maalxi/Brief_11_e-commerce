import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item slam-left"><a className="hoverLogo" href="/"><img className="logo" src="/image/Cerise.png" alt="Logo de l'épicerise" /></a></li>
        <li className="nav-item"><a href="#">L’ÉpiCerise</a></li>
        <li className="nav-item"><a href="#">Produits</a></li>
        <li className="nav-item"><a href="#">Panier</a></li>
        <li className="nav-item"><a className="contact" href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
