import Image from "next/image";
import './CategoryCard.css';
import Link from "next/link";

export default function CategoryCard({ImgCard, titleCard}) {
    return (
        <>
            <Link className="CategoryCardLink" href='#'>
                <div className="CategoryCardContainer">

                    <Image className="CategoryCardImg"
                        src={ImgCard}
                        alt="Panier végétal"
                        width={100}
                        height={100}
                    />

                    <p className="CategoryCardTitle">{titleCard}</p>

                </div>
            </Link>
        </>
    )
}