
import getData from "@/app/APICalls/fetch";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";

export default function CategoryCardsBox({ titleCardsContainer }) {
    const [result, setResult] = useState('');

    // const test = async () => {

    // }

    
    let cat = getData("http://localhost:8001/api/categories");
    setResult(cat)
    console.log(result);
    // useEffect(() => {
    //   }, [result]);


    return (
        <>
            {/* <div className="CategoryCardsContainer">
                <h2 className="titleCardsContainer">{titleCardsContainer}</h2>
                <div className="CategoryListCardsContainer">
                    {result?.map((item) => (
                        <CategoryCard
                            titleCard={item.titleCard}
                            ImgCard={item.ImgCard?.url}
                        />
                    ))}
                </div>
            </div> */}
        </>
    );
}

