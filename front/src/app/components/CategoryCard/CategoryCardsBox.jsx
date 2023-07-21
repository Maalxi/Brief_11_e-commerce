import CategoriesList from "@/app/APICalls/categories";
import CategoryCard from "./CategoryCard";
import { useState } from "react";

export default function CategoryCardsBox({ titleCardsContainer, data }) {

    return (
        <>
            <CategoriesList>
                <div className="CategoryCardsContainer">
                    <h2 className="titleCardsContainer">{titleCardsContainer}</h2>
                    <div className="CategoryListCardsContainer">
                        {data?.map((item, index) => (
                            <CategoryCard
                                key={index}
                                titleCard={item.titleCard}
                                ImgCard={item.ImgCard?.url}
                            />
                        ))}
                    </div>
                </div>
            </CategoriesList>
        </>
    );
}

