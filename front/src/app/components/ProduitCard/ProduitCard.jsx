import Image from "next/image";
// import './CategoryCard.css';

export default function ProduitCard({ image, name, key, desc, price, stock }) { // Utilisez des accolades pour déstructurer les props
    const img_url = "http://127.0.0.1:8001/uploads/images/" + image; // Construisez correctement l'URL

    return (
        <>
                <div>
                    <Image className="CategoryCardImg"
                        src={img_url} // Utilisez img_url pour l'attribut src de l'Image
                        alt={key}
                        width={80}
                        height={80}
                    />
                    <p>{name}</p>
                    <p>{desc}</p>
                    <p>{price}</p>
                    <p>{stock}</p>
                </div>
        </>
    );
}
