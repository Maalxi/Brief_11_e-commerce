'use client'

import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "@/app/AppContext";
import './ProductCard.css';


export default function ProduitCard({ image, id, name, key, desc, price, stock }) {
  const img_url = "http://127.0.0.1:8001/uploads/images/" + image;
  const id_prod = id;
  const { toast } = useContext(AppContext);
  const [dataLocal, setDataLocal] = useState('');
  
  const [quantity, setQuantity] = useState(() => {
    const cartData = localStorage.getItem('pannier');
    if (cartData) {
      const parsedCartData = JSON.parse(cartData);
      const filteredData = parsedCartData.filter(item => item.productId === id_prod);
      if (filteredData.length > 0) {
        return filteredData[0].quantity;
      }
    }
    return 0; // Valeur par défaut si le produit n'est pas présent dans le localStorage
  });

  useEffect(() => {
    const getCartFromLocalStorage = () => {
      const cartData = localStorage.getItem('pannier');
      if (cartData) {
        const parsedCartData = JSON.parse(cartData);
        const filteredData = parsedCartData.filter(item => item.productId === id_prod);
        if (filteredData.length > 0) {
          setDataLocal(filteredData[0]);
        }
      }
    };

    getCartFromLocalStorage();
  }, []);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setQuantity(inputValue === "" ? 0 : Number(inputValue));
    }
  };

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = (productId, name_u, desc_u, quantityToAdd, inventory, prix_u, image_u) => {
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
      toast.current.show({
        severity: "success",
        summary: "Supprimer",
        detail: "Produit supprimé du panier"
      })
      return;
    }

    const existingItemIndex = pannier.findIndex(item => item.productId === productId);

    if (existingItemIndex !== -1) {
      // Si le produit est déjà dans le panier, écraser la quantité avec la nouvelle valeur
      pannier[existingItemIndex].quantity = quantityToAdd;
      pannier[existingItemIndex].price_total = prix_u * quantityToAdd
      toast.current.show({
        severity: "success",
        summary: "Modification",
        detail: "Quantité modifiée dans le panier"
      })
    } else {
      // Sinon, ajouter le produit au panier avec la quantité spécifiée et son ID
      pannier.push({
        productId,
        name: name_u,
        desc: desc_u,
        quantity: quantityToAdd,
        price: prix_u,
        stock: inventory,
        image: image_u
      });

      toast.current.show({
        severity: "success",
        summary: "Ajout",
        detail: "Produit ajouté au panier"
      })
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
          <p className="productCardPrice">
            <strong>Prix : </strong>
            {price * quantity} €
          </p>
          <p className="productCardStock">
            <strong>Nombre d'articles en stock : </strong>
            {stock}
          </p>
        </div>

        <div className="ProductLine"></div>

        <div className="productCardColumn size3">
          <p className="productCardDescription">
            <strong>Description : </strong>
            {desc}
          </p>
        </div>

        <div className="ProductLine"></div>

        <div className="productCardColumn size4">
          <div className="productCardQuantityContainer">
            <p className="productCardQuantityContainerTitle">Quantité</p>
            <button className="productCardDecrementBtn" onClick={decrement}>-</button>
            <input
              type="text"
              value={quantity}
              onChange={handleInputChange}
              className="productCardQuantity"
            />
            <button className="productCardIncrementBtn" onClick={increment}>+</button>
          </div>

          <button className="productCardShopBtn" onClick={() => addToCart(id_prod, name, desc, quantity, stock, price, image)}>
            {quantity === 0 ? 'Supprimer du panier' : 'Ajouter au panier'}
          </button>
        </div>

      </div>
    </>
  );
}
