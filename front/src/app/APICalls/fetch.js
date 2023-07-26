const customFetch = async (url) => {
  try {
    const fetchData = await fetch(url);
    if (!fetchData.ok) {
      throw new Error("Échec de la requête");
    }
    const data = await fetchData.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Une erreur est survenue lors de la récupération des données");
  }
};

export default customFetch;
