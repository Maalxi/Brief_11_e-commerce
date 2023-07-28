"use client"
import React, { useState } from 'react';
import './UserFormCart.css';
import { base_url } from '@/app/APICalls/base_url';

function UserFormCart({ totalPrice }) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [modePaiement, setModePaiement] = useState('');
  const [codePromo, setCodePromo] = useState('');
  const [data, setData] = useState('');

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
    event.preventDefault();
    try {
      const orderData = {
        validation: true,
        price: 10,
        price_total: 8,
        products: ["/api/products/2"],
        user: {
          first: "Toufik",
          last : "Dabossss",
          email: "email@exemple.com"
        }
      }
      const response = await fetch(base_url + "localhost:8001/api/reservations", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })

    if (!response.ok){
      throw new Error('Erreur lors de la commande')
    }

    // const order = await response.json();
    // console.log(order);

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
            <input type="text" id="nom" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} required></input>
          </div>

          <div className='UserFormCartFormStyle'>
            <label htmlFor="prenom">Prénom :</label>
            <input type="text" id="prenom" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required></input>
          </div>

          <div className='UserFormCartFormStyle'>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
          </div>

          <div className='UserFormCartFormStyle'>
            <label>Mode de paiement :</label>
            <div className='UserFormCartFormRadio'>
              <div className='UserFormCartFormRadioContainer'>
                <input type="radio" id="espece" name="paiement" value="Espèce" checked={modePaiement === "Espèce"} onChange={() => setModePaiement("Espèce")} required></input>
                <label htmlFor="espece">Espèce</label>
              </div>

              <div className='UserFormCartFormRadioContainer'>
                <input type="radio" id="carte" name="paiement" value="Carte" checked={modePaiement === "Carte"} onChange={() => setModePaiement("Carte")} required></input>
                <label htmlFor="carte">Carte</label>
              </div>

              <div className='UserFormCartFormRadioContainer'>
                <input type="radio" id="cheque" name="paiement" value="Chèque" checked={modePaiement === "Chèque"} onChange={() => setModePaiement("Chèque")} required></input>
                <label htmlFor="cheque">Chèque</label>
              </div>
            </div>
          </div>
        </div>



        <div className='UserFormCartRight'>
          <p className='UserFormCartQuestionPromo'>Vous possédez un code promo ?</p>

          <form className='UserFormCartCodePromo'
          //  onSubmit={handleFormSubmit}
           >
            <div className='UserFormCartCodePromoStyle'>
              <label htmlFor="code">CODE PROMO :</label>
              <input type="text" id="code" name="code" value={codePromo} onChange={(e) => setCodePromo(e.target.value)} required></input>
              <input className='UserFormCartBtn' type="submit" value="Appliquer"></input>
            </div>
          </form>

          <div className='UserFormCartPriceValid'>
            <p className='UserFormCartPrice'>TOTAL : {totalPrice}</p> {/* Display the totalPrice here */}
            <input className='UserFormCartBtn' type="submit" value="Valider le panier"></input>
          </div>
        </div>
      </form>

    </div >
  );
}

export default UserFormCart;
