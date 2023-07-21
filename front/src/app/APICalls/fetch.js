export default function getData(url) {
  const fetchData = async () => {
    try {
      const categoriesData = await fetch(url);
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
}
