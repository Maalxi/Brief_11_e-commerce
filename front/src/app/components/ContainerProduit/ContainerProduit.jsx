'use client'

import { useEffect, useState } from "react";
import customFetch from "@/app/APICalls/fetch";
import ProduitCard from "../ProduitCard/ProduitCard";
import CategoryCardFilter from "../CategoryCard/CategoryCardfilter";
import { base_url } from "@/app/APICalls/base_url";

export default function ContainerProduit() {
  const [prodData, setprodData] = useState([]);
  const [catData, setCatData] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const fetchDataCat = async () => {
    try {
      const data = await customFetch(base_url + "127.0.0.1:8001/api/categories");
      setCatData(data["hydra:member"]); // Stockez les données dans le state
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataProd = async () => {
    try {
      const data = await customFetch(base_url + "127.0.0.1:8001/api/products");
      setprodData(data["hydra:member"]); // Stockez les données dans le state
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataCat();
    fetchDataProd();

    // Récupérer l'URL actuelle de la page
    const currentURL = window.location.href;
    const urlSearchParams = new URLSearchParams(window.location.search);

    // Tester s'il y a des paramètres d'URL
    if (urlSearchParams.has("category")) {
      const categoryId = urlSearchParams.get("category");
      setSelectedCategoryId(parseInt(categoryId, 10));
    }
  }, []);

  // Ajoutez une condition pour vérifier si prodData est vide ou s'il y a eu une erreur lors de la récupération des données
  if (prodData.length === 0) {
    return <div>Loading...</div>; // Vous pouvez afficher un message de chargement ou une indication que les données sont en cours de chargement
  }

  // Ajoutez une condition pour vérifier si catData est vide ou s'il y a eu une erreur lors de la récupération des données
  if (catData.length === 0) {
    return <div>Loading...</div>; // Vous pouvez afficher un message de chargement ou une indication que les données sont en cours de chargement
  }

  const handleClick = (catId) => {
    setSelectedCategoryId(catId);
  }



  return (
    <>
      <div className="cardsContainerBox">
        <h2 className="cardsContainerTitle">Catégories</h2>
        <div className="cardsContainer" >
          {catData.map((item, index) => (
            <div onClick={() => handleClick(index + 1)}>
              <CategoryCardFilter
                key={index + 1}
                name={item.name}
                image={item.image}
                id={item.id}
              />
            </div>

          ))}
        </div>

      </div >
      <div>
        <h2>Produits</h2>
        <div>
          {prodData
            .filter((item) => selectedCategoryId === null || (item.cat && item.cat.id === selectedCategoryId))
            .map((item, index) => (
              <ProduitCard
                id={item.id}
                key={index + 1}
                name={item.name}
                desc={item.description}
                price={item.price}
                image={item.image}
                stock={item.inventory}
              />
            ))}
        </div>
      </div>
    </>
  );
}
