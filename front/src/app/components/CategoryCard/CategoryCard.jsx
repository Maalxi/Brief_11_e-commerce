import Image from "next/image";
import './CategoryCard.css';
import Link from "next/link";

export default function CategoryCard({ image, name, key }) { // Utilisez des accolades pour déstructurer les props
    const img_url = "http://127.0.0.1:8001/uploads/images/" + image; // Construisez correctement l'URL

    return (
        <>
            <Link className="CategoryCardLink" href='#'>
                <div className="CategoryCardContainer">

                    <Image className="CategoryCardImg"
                        src={img_url} // Utilisez img_url pour l'attribut src de l'Image
                        alt={key}
                        width={80}
                        height={80}
                    />
                    <p className="CategoryCardTitle">{name}</p>
                </div>
            </Link>
        </>
    );
}
