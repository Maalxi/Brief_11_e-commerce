import Image from "next/image";
import './CategoryCard.css';

import { base_url } from "@/app/APICalls/base_url";

export default function CategoryCardFilter({ image, name, key, id }) { // Utilisez des accolades pour déstructurer les props
    const img_url = base_url + "127.0.0.1:8001/uploads/images/" + image; // Construisez correctement l'URL

    return (
        <>
            <div className="CategoryCardLink">
            <div className="CategoryCardContainer">
                <Image className="CategoryCardImg"
                    src={img_url} // Utilisez img_url pour l'attribut src de l'Image
                    alt={id}
                    width={80}
                    height={80}
                />
                <p className="CategoryCardTitle">{name}</p>
            </div>
        </div >
        </>
    );
}
