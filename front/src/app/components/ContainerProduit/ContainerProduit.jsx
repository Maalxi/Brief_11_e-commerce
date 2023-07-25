'use client'

import { useEffect, useState } from "react";
import customFetch from "@/app/APICalls/fetch";
import ProduitCard from "../ProduitCard/ProduitCard";

import { base_url } from "@/app/APICalls/base_url";

export default function ContainerProduit() {
  const [prodData, setprodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await customFetch(base_url + "127.0.0.1:8001/api/products");
        console.log(data); // Vérifiez les données récupérées dans la console
        setprodData(data["hydra:member"]); // Stockez les données dans le state
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Ajoutez une condition pour vérifier si prodData est vide ou s'il y a eu une erreur lors de la récupération des données
  if (prodData.length === 0) {
    return <div>Loading...</div>; // Vous pouvez afficher un message de chargement ou une indication que les données sont en cours de chargement
  }

  return (
    <>
      <div>
        <h2> Produits </h2>
      <div>
        {prodData.map((item, index) => (
          <ProduitCard 
            key={index} 
            name={item.name} 
            desc={item.description} 
            price={item.price} 
            image={item.image}
            stock={item.inventory}
        />
        ))}
      </div>
    </div >
    </>
  );
}
