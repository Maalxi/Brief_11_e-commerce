'use client'

import Image from "next/image";
import { useContext, useState } from "react";
import { AppContext } from "@/app/AppContext";
import './ProductCard.css';


export default function ProduitCard({ image, id, name, key, desc, price, stock }) {
  const img_url = "http://127.0.0.1:8001/uploads/images/" + image;
  const id_prod = id
  const { toast } = useContext(AppContext)

  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = (productId, quantityToAdd, inventory, prix_u) => {
    const pannier = JSON.parse(localStorage.getItem('pannier')) || [];

    if (quantityToAdd > inventory) {
      toast.current.show({
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
      pannier[existingItemIndex].price_total = prix_u * quantityToAdd
    } else {
      // Sinon, ajouter le produit au panier avec la quantité spécifiée et son ID
      pannier.push({ productId, quantity: quantityToAdd, price_total: prix_u*quantityToAdd });
    }

    localStorage.setItem('pannier', JSON.stringify(pannier));
  };



  return (
    <>
      <div className="productCardContainer">

        <div className="productCardColumn size1">
          <Image
            className="productCardImg"
            src={img_url}
            alt={id}
            width={100}
            height={100}
          />
        </div>

        <div className="ProductLine"></div>

        <div className="productCardColumn size2">
        <p className="productCardName">{name}</p>
        <p className="productCardPrice"><strong>Prix : </strong>{price} €</p>
        <p className="productCardStock"><strong>Nombre d'articles en stock : </strong>{stock}</p>
        </div>

        <div className="ProductLine"></div>

        <div className="productCardColumn size3">
        <p className="productCardDescription"><strong>Description : </strong>{desc}</p>
        </div>

        <div className="ProductLine"></div>

        <div className="productCardColumn size4">
        <div className="productCardQuantityContainer">
          <p className="productCardQuantityContainerTitle">Quantité</p>
          <button className="productCardDecrementBtn" onClick={decrement}>-</button>
          <input
            type="number"
            min="0" readOnly
            step="1"
            value={quantity}
            readOnly
            className="productCardQuantity"
          />
          <button className="productCardIncrementBtn" onClick={increment}>+</button>
        </div>

        <button className="productCardShopBtn" onClick={() => addToCart(id_prod, quantity, stock, price)}>Panier</button>
        </div>

      </div>
    </>
  );
}
