"use client";

import { useState, useEffect } from "react";

const getCategories = async () => {
  try {
    const categoriesData = await fetch("http://localhost:8001/api/categories");
    const data = await categoriesData.json()
    console.log(data["hydra:member"]);

    if (!categoriesData.ok) {
      throw new Error("Ne peut pas récupérer les categories");
    }
  
    return data;

  } catch (error) {
    console.error(error)
  }
};

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
      // const categoriesData = await fetch("http://127.0.0.1:8001/api/products%22);
      // const data = await getCategories();
      // setCategories(data.results);
      getCategories();
      // console.log(categoriesData);
    // };

    // fetchData();
  }, []);

  return (
    <ul>
      {categories.map((categorie, index) => (
        <li key={index}>{categorie.name}</li>
      ))}
    </ul>
  );
};

export default CategoriesList;