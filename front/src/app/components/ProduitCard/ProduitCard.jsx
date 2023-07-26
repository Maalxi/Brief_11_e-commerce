'use client'

import Image from "next/image";
import { useContext, useState } from "react";
import { AppContext } from "@/app/AppContext";


export default function ProduitCard({ image, id, name, key, desc, price, stock }) {
  const img_url = "http://127.0.0.1:8001/uploads/images/" + image;
  const id_prod = id
  const {toast} = useContext(AppContext)

  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = (productId, quantityToAdd, inventory) => {
    const pannier = JSON.parse(localStorage.getItem('pannier')) || [];
  
    if (quantityToAdd > inventory) {
      toast.current.show ({
        severity: "error",
        summary: "Erreur",
        detail: "Pas assez de stock pour votre commande"
      })
      return
     
    } else if (quantityToAdd === 0) {
      // Si la quantité à ajouter est égale à 0, supprimer l'item du panier
      const updatedpannier = pannier.filter(item => item.productId !== productId);
      localStorage.setItem('pannier', JSON.stringify(updatedpannier));
      return;
    }
  
    const existingItemIndex = pannier.findIndex(item => item.productId === productId);
  
    if (existingItemIndex !== -1) {
      // Si le produit est déjà dans le panier, écraser la quantité avec la nouvelle valeur
      pannier[existingItemIndex].quantity = quantityToAdd;
    } else {
      // Sinon, ajouter le produit au panier avec la quantité spécifiée et son ID
      pannier.push({ productId, quantity: quantityToAdd });
    }
  
    localStorage.setItem('pannier', JSON.stringify(pannier));
  };
  
  

  return (
    <>
      <div className="produit-card">
        <Image
          className="produit-card__image"
          src={img_url}
          alt={id}
          width={80}
          height={80}
        />
        <p className="produit-card__name">{name}</p>
        <p className="produit-card__desc">{desc}</p>
        <p className="produit-card__price">{price}</p>
        <p className="produit-card__stock">{stock}</p>

        <div className="produit-card__quantity-input">
          <button className="produit-card__decrement-btn" onClick={decrement}>-</button>
          <input
            type="number"
            min="0"readOnly
            step="1"
            value={quantity}
            readOnly
            className="produit-card__quantity"
          />
          <button className="produit-card__increment-btn" onClick={increment}>+</button>
        </div>

        <button className="produit-card__add-to-cart-btn" onClick={() => addToCart(id_prod, quantity, stock)}>Panier</button>

      </div>
    </>
  );
}
