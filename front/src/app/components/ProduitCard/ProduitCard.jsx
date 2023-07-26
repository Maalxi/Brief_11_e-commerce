import Image from "next/image";
import { useState } from "react";

export default function ProduitCard({ image, name, key, desc, price, stock }) {
  const img_url = "http://127.0.0.1:8001/uploads/images/" + image;

  const [quantity, setQuantity] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  return (
    <>
      <div className="produit-card">
        <Image
          className="produit-card__image"
          src={img_url}
          alt={key}
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
            min="0"
            step="1"
            value={quantity}
            readOnly
            className="produit-card__quantity"
          />
          <button className="produit-card__increment-btn" onClick={increment}>+</button>
        </div>

        <button className="produit-card__add-to-cart-btn" onClick={addToCart}>Panier</button>

        {showPopup && <div className="produit-card__popup">Vous avez ajouté {quantity} article(s) au panier.</div>}
      </div>
    </>
  );
}
