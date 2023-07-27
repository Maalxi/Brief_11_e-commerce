'use client'

import { useEffect, useState } from "react";
import ProduitCardPannier from "../ProduitCard/ProduitCardPannier";
import "./ContainerProduct.css";

export default function ContainerProduitPannier() {
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

  // Ajoutez une condition pour vérifier si prodData est vide ou s'il y a eu une erreur lors de la récupération des données
  if (data.length === 0) {
    return <div>Loading...</div>; // Vous pouvez afficher un message de chargement ou une indication que les données sont en cours de chargement
  }

  return (
    <>
      <div className="allProductCardContainerTitle">
        <h2>Panier</h2>
        <div className="allProductCardContainer">
          {data.map((item, index) => (
              <ProduitCardPannier
                id={item.productId}
                key={index + 1}
                name={item.name}
                desc={item.desc}
                price={item.price}
                image={item.image}
                stock={item.stock}
                quantite={item.quantity}
              />
            ))}
        </div>
      </div>
    </>
  );
}
