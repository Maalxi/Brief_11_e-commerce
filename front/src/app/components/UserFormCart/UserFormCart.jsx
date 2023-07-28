'use client'
import React, { useState, useEffect } from 'react';
import './UserFormCart.css';
import { base_url } from '@/app/APICalls/base_url';

function UserFormCart() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [modePaiement, setModePaiement] = useState('');
  const [codePromo, setCodePromo] = useState('');
  const [data, setData] = useState('');
  const [prixTotal, setPrixTotal] = useState(0);

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
  useEffect(() => {
    setPrixTotal(calculateTotalPrice(data));
  }, [data]);

  function calculateTotalPrice(data) {
    return data.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  const productIds = data.map((item) => item.productId);
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

    try {
      const orderData = {
        validation: false,
        price: prixTotal,
        products: productIds.map((productId) => `/api/products/${productId}`),
        user: {
          first: nom,
          last: prenom,
          email: email
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



  } catch (error){
    console.error(error);
  }
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

          <form className='UserFormCartCodePromo'

           >
            <div className='UserFormCartCodePromoStyle'>
              <label htmlFor="code">CODE PROMO :</label>
              <input type="text" id="code" name="code" value={codePromo} onChange={(e) => setCodePromo(e.target.value)} required></input>
              <input className='UserFormCartBtn' type="submit" value="Appliquer"></input>
            </div>
          </form>

          <div className='UserFormCartPriceValid'>
            <p className='UserFormCartPrice'>TOTAL : <strong>{prixTotal.toFixed(2)}</strong></p>
            <input className='UserFormCartBtn' type="submit" value="Valider le panier" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserFormCart;