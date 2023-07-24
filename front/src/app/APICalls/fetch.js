const customFetch = async (url) => {
  try {
    const fetchData = await fetch(url);
    if (!fetchData.ok) {
      throw new Error("Échec de la requête");
    }
    const data = await fetchData.json();
    // console.log(data["hydra:member"]); // Cela affiche les données, mais ne les retourne pas

    return data; // Retourne les données pour les utiliser ailleurs
  } catch (error) {
    console.error(error);
    throw new Error("Une erreur est survenue lors de la récupération des données");
  }
};

export default customFetch;
