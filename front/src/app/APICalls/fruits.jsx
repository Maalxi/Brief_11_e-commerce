"use client";

import { useState, useEffect } from "react";

const getFruits = async () => {
  try {
    const fruitsData = await fetch("http://localhost:8001/api/products");
    const data = await fruitsData.json()
    console.log(data["hydra:member"]);
  } catch (error) {
    console.error(error)
  }


  if (!fruitsData.ok) {
    throw new Error("Ne peut pas récupérer les fruits");
  }

  return fruitsData.json();
};

const FruitsList = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
<<<<<<< HEAD
      // const fruitsData = await fetch("http://127.0.0.1:8001/api/products");
=======
      // const fruitsData = await fetch("http://127.0.0.1:8001/api/products%22);
>>>>>>> master
      // const data = await getFruits();
      // setFruits(data.results);
      getFruits();
      // console.log(fruitsData);
    // };

    // fetchData();
  }, []);

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit.name}</li>
      ))}
    </ul>
  );
};

export default FruitsList;