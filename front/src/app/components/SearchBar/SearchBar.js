import React, { useState } from 'react';
import './SearchBar.css';
import { ImSearch } from 'react-icons/im';

import { base_url } from '@/app/APICalls/base_url';

const suggestions = ['Fruits', 'carotte', 'lait', 'savon', 'poulet'];

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [prodData, setProdData] = useState([]);

  const img_url = "http://127.0.0.1:8001/uploads/images/";

  const fetchDataProd = async (searchValue) => {
    try {
      const response = await fetch(`${base_url}127.0.0.1:8001/api/products`);
      const data = await response.json();
      const filteredData = data["hydra:member"].filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
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
    fetchDataProd(searchValue);
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
          placeholder={suggestions.join(', ')}
        />
        <button type="submit" className="searchBtn">
          <ImSearch />
        </button>
      </form>

      {/* Afficher les résultats de la recherche */}
      {prodData.length > 0 && (
        <div className="searchResults">
          {prodData.map((product, index) => (
            <div key={index} className="productItem">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Prix: {product.price}€</p>
              <img className='ImgSearch' src={`${img_url}${product.image}`} alt={product.name} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
