import React, { useState } from "react";
import "./SearchBar.css";
import { ImSearch } from "react-icons/im";

import ProduitCard from "../ProduitCard/ProduitCard";

import { base_url } from "@/app/APICalls/base_url";

const suggestions = ["Fruits", "carotte", "lait", "savon", "poulet"];

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [prodData, setProdData] = useState([]);

  const fetchDataProd = async (searchValue) => {
    try {
      const response = await fetch(`${base_url}127.0.0.1:8001/api/products`);
      const data = await response.json();
      const filteredData = data["hydra:member"].filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setProdData(filteredData); // Stockez les données filtrées dans le state
    } catch (error) {
      console.error(error);
    }
  };

  function handleSearchChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (searchValue.length >= 3) {
      fetchDataProd(searchValue);
    } else {
      setProdData([]); // vide le tableau de résultat si la chaîne de recherche est trop courte
    }
  }

  return (
    <div>
      <form className="searchForm" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          id="searchInput"
          className="searchInput"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder={suggestions.join(", ")}
        />
        <button type="submit" className="searchBtn">
          <ImSearch />
        </button>
      </form>

      {/* Afficher les résultats de la recherche */}
      {prodData.length > 0 && (
          <div className="searchResults">
            {prodData.map((item, index) => (
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
      )}
    </div>
  );
}
