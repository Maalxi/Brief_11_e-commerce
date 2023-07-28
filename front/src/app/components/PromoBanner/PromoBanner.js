// PromoBanner.js

import React, { useState } from 'react';
import styles from './PromoBanner.module.css';

export default function PromoBanner() {
    const [showCopiedPopup, setShowCopiedPopup] = useState(false);

    const handleCopyToClipboard = () => {
        const promoCode = "SUMMER10";
        navigator.clipboard.writeText(promoCode)
            .then(() => {
                setShowCopiedPopup(true);
                setTimeout(() => {
                    setShowCopiedPopup(false);
                }, 3000);
            })
            .catch((error) => console.error('Erreur lors de la copie dans le presse-papiers :', error));
    };

    return (
        <div className={styles.promoBanner}>
            {showCopiedPopup && <div className={styles.copiedPopup}>Code promo copié !</div>}
            <div className={styles.bannerContent}>
                <h2 className={styles.promoTitle}>Codes Promo Spéciaux !</h2>
                <p className={styles.promoText}>
                    Utilisez le code <strong onClick={handleCopyToClipboard} style={{ cursor: 'pointer', textDecoration: 'underline' }}>{"SUMMER10"}</strong> pour obtenir <strong>10%</strong> de réduction sur votre prochaine commande.
                </p>
            </div>
        </div>
    );
} 