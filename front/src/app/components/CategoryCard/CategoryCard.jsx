import Image from "next/image";
import './CategoryCard.css';
import Link from "next/link";

export default function CategoryCard(url) {
    return (
        <>
            <Link className="CategoryCardLink" href='#'>
                <div className="CategoryCardContainer">

                    <Image className="CategoryCardImg"
                        src="/image/PanierVegetal.jpg"
                        alt="Panier végétal"
                        width={100}
                        height={100}
                    />

                    <p className="CategoryCardTitle">FRUITS</p>

                </div>
            </Link>
        </>
    )
}