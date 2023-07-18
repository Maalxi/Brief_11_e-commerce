import Image from "next/image";
import styles from "./pageAccueil.module.css";
import js_navbar from "./pageAccueil.module.css";
import css_navbar from "./pageAccueil.module.css";

export default function Home() {
  return (
    <>
      <nav>
        <a href="/" class="nav-icon">
          <Image
            className={styles.logo}
            src="/image/Cerise.png"
            alt="Cherry icon"
            width={60}
            height={60}
          />
        </a>

        <div class="main-navlinks">
          <button
            type="button"
            class="hamburger"
            aria-label="Toggle Navigation"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div class="navlinks-container">
            <a href="#">Accueil</a>
            <a href="#">Produits</a>
            <a href="#">Panier</a>
            <a href="#">Contact</a>
            {/* <a href="#">Sponsors</a> */}
            {/* <a href="#">Inscriptions</a> */}
          </div>
        </div>
      </nav>

      <h2>test</h2>
    </>
  );
}
