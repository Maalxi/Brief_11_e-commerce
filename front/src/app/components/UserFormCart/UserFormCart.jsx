"use client"
import React, { useState, useEffect } from 'react';
import './UserFormCart.css';
import { base_url } from '@/app/APICalls/base_url';

function UserFormCart() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [modePaiement, setModePaiement] = useState('');
  const [codePromo, setCodePromo] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCartFromLocalStorage = () => {
      const cartData = localStorage.getItem('pannier');
      if (cartData) {
        const parsedCartData = JSON.parse(cartData);
        setData(parsedCartData);
      }
    };

    getCartFromLocalStorage();
  }, []);

  const totalPrice = data.reduce((total, item, index) => {
    return total + item.price * item.quantity;
  }, 0);
  console.log(totalPrice);

  // const productPrice = data.map((item) => item.price);
  // const productQuantity = data.map((item) => item.quantity);
  // console.log(productPrice);
  // console.log(productQuantity);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!nom || !prenom || !email || !modePaiement) {
      alert("Veuillez remplir tous les champs obligatoires avant de valider le panier.");
      return;
    }

    setNom('');
    setPrenom('');
    setEmail('');
    setModePaiement('');
    setCodePromo('');
    console.log("test");

    try {
      const orderData = {
        validation: true,
        price: 10,
        price_total: 8,
        products: ["/api/products/2"],
        user: {
          first: "Toufik",
          last: "Dabossss",
          email: "email@exemple.com"
        }
      };

      const response = await fetch(base_url + "localhost:8001/api/reservations", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la commande');
      }

      // Facultativement, gérez la réponse ou affichez un message de succès
      // const order = await response.json();
      // console.log(order);

    } catch (error) {
      console.error(error);
    }
  };

  const handlePromoCodeSubmit = (event) => {
    event.preventDefault();

    // Ajoutez ici le code pour gérer la soumission du code promo
    // Vous pouvez effectuer un appel API pour valider le code promo
    // ...

    // Effacez l'entrée du code promo après la soumission
    setCodePromo('');
  };

  return (
    <div className='UserFormCart'>
      <h2 className='UserFormCartTitle'>VALIDATION</h2>

      <form className='UserFormCartForm' onSubmit={handleFormSubmit}>
        <div className='UserFormCartLeft'>
          <p className='UserFormCartSubtitle'>Veuillez indiquer vos coordonnées avant de valider votre commande.</p>

          <div className='UserFormCartFormStyle'>
            <label htmlFor="nom">Nom :</label>
            <input type="text" id="nom" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
          </div>

          <div className='UserFormCartFormStyle'>
            <label htmlFor="prenom">Prénom :</label>
            <input type="text" id="prenom" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
          </div>

          <div className='UserFormCartFormStyle'>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className='UserFormCartFormStyle'>
            <label>Mode de paiement :</label>
            <div className='UserFormCartFormRadio'>
              <div className='UserFormCartFormRadioContainer'>
                <input type="radio" id="espece" name="paiement" value="Espèce" checked={modePaiement === "Espèce"} onChange={() => setModePaiement("Espèce")} required />
                <label htmlFor="espece">Espèce</label>
              </div>

              <div className='UserFormCartFormRadioContainer'>
                <input type="radio" id="carte" name="paiement" value="Carte" checked={modePaiement === "Carte"} onChange={() => setModePaiement("Carte")} required />
                <label htmlFor="carte">Carte</label>
              </div>

              <div className='UserFormCartFormRadioContainer'>
                <input type="radio" id="cheque" name="paiement" value="Chèque" checked={modePaiement === "Chèque"} onChange={() => setModePaiement("Chèque")} required />
                <label htmlFor="cheque">Chèque</label>
              </div>
            </div>
          </div>
        </div>

        <div className='UserFormCartRight'>
          <p className='UserFormCartQuestionPromo'>Vous possédez un code promo ?</p>

          <div className='UserFormCartCodePromoStyle'>
            <label htmlFor="code">CODE PROMO :</label>
            <input
              type="text"
              id="code"
              name="code"
              value={codePromo}
              onChange={(e) => setCodePromo(e.target.value)}
              required
            />
            <input className='UserFormCartBtn' type="submit" value="Appliquer" onClick={handlePromoCodeSubmit} />
          </div>

          <div className='UserFormCartPriceValid'>
            <p className='UserFormCartPrice'>TOTAL : <strong>{totalPrice}</strong></p> {/* Affichez le prix total ici */}
            <input className='UserFormCartBtn' type="submit" value="Valider le panier" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserFormCart;
