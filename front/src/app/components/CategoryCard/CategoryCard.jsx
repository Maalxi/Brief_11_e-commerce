import Image from "next/image";
import './CategoryCard.css';
import Link from "next/link";
import { base_url } from "@/app/APICalls/base_url";


export default function CategoryCard({ image, name, key, cat_id }) { // Utilisez des accolades pour déstructurer les props
    const img_url = base_url + "127.0.0.1:8001/uploads/images/" + image; // Construisez correctement l'URL
    const lien = base_url + "localhost:8000/produits?category=" + cat_id
    return (
        <>
            <Link className="CategoryCardLink" href={lien} >
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
