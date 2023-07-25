'use client'

import { useEffect, useState } from "react";
import customFetch from "@/app/APICalls/fetch";
import CategoryCard from "../CategoryCard/CategoryCard";
import { base_url } from "@/app/APICalls/base_url";

export default function CardContainer() {
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await customFetch(base_url + "127.0.0.1:8001/api/categories");
        setCatData(data["hydra:member"]); // Stockez les données dans le state
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Ajoutez une condition pour vérifier si catData est vide ou s'il y a eu une erreur lors de la récupération des données
  if (catData.length === 0) {
    return <div>Loading...</div>; // Vous pouvez afficher un message de chargement ou une indication que les données sont en cours de chargement
  }


  return (
    <>
      <div className="cardsContainerBox">
      <h2 className="cardsContainerTitle">Catégories</h2>

      <div className="cardsContainer">
        {catData.map((item, index) => (
          <CategoryCard key={index} name={item.name} image={item.image} />
          // <p>{item.name}</p>
        ))}
      </div>
    </div >
    </>
  );
}
