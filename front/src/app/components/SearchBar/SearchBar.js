import React, { useState } from 'react';
import './SearchBar.css';

import { ImSearch } from 'react-icons/im';



const suggestions = ['Fruits', 'carotte', 'lait', 'savon', 'poulet'];

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  // Fonction pour gérer le changement de valeur de l'input de recherche
  function handleSearchChange(event) {
    setSearchValue(event.target.value);
  }

  // Fonction pour gérer la soumission de la recherche
  function handleSearchSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="searchForm" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        id="searchInput"
        className="searchInput"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder={suggestions.join(', ')}
      />
      {/* Bouton de recherche */}
      <button type="submit" className="searchBtn">
      <ImSearch />
      </button>
    </form>
  );
}
