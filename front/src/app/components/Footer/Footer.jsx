import React, { useState } from 'react';
import './Footer.css';
import Link from 'next/link';

export default function Footer() {


    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };



    return (
        <>

            <div className="footerFullContainer">

                <div className='footerContainerTop'>

                    <div className='footerContainerTopList'>
                        <Link href='/'>
                            <img className='imgLogoFooter' src="/image/Cerise.png" alt="Logo Épicerise" />
                        </Link>

                    </div>

                    <div className='footerContainerTopList'>
                        <p className='titleFooter'>L'Épicerise</p>
                        <p className='paraFooter'>Oubliez la crise,
                            succombez à la cerise !</p>
                    </div>

                    <div className='footerContainerTopList'>
                        <p className='titleFooter'>LIENS</p>
                        <ul>
                            <li><Link href='#' className='linkFooter'>Produits</Link></li>
                            <li><Link href='#' className='linkFooter'>Panier</Link></li>
                            <li><Link href='#' className='linkFooter'>Contact</Link></li>
                        </ul>
                    </div>

                    <div className='footerContainerTopList'>
                        <p className='titleFooter'>AUTRE</p>
                        <ul>
                            <li><Link href='#' className='linkFooter'>Code Promo</Link></li>
                        </ul>
                        <p className='paraFooter'>S’abonner à la newsletter :</p>
                        <form className='newsletterForm' onSubmit={handleSubmit}>
                            <input
                                type="email"
                                id="emailInput"
                                placeholder="email"
                                required
                                onChange={handleInputChange}
                            />
                            <button type="submit">Go</button>
                        </form>
                    </div>

                </div>

                <div className='footerLine'></div>

                <div className='footerContainerMidlle'>
                    <p className='titleFooter'>Pour votre santé, évitez de grignoter entre les repas.</p>
                    <Link href='https://www.mangerbouger.fr/' className='linkFooter'>www.mangerbouger.fr</Link>
                    <p className='paraFooter'>L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC MODÉRATION.</p>
                    <img className='imgRegleFooter' src="/image/reglementation-vente-mineur.jpg" alt="Reglementation-vente-mineur" />
                </div>


                <div className='footerLine'></div>

                <div className='footerContainerBottom'>
                    <p className='paraFooter'>lepicerise.fr - copyright 2023</p>
                </div>

            </div>

        </>
    )
}