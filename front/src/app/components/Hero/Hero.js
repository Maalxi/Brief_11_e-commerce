import Image from "next/image";
import './Hero.css';
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div className="heroContainer">

                <div className="heroContainerLeft">
                    <h1 className="heroTitle">Oubliez la crise,
                        <br />
                        succombez à la cerise !</h1>
                    <Link href='/produits' className="heroBtn">Voir nos produits</Link>
                </div>

                <div className="heroContainerRight">
                    <Image className="heroImg"
                        src="/image/PanierVegetal.jpg"
                        alt="Panier végétal"
                        width={250}
                        height={250}
                    />
                </div>

            </div>

            <div className="heroLine"></div>
        </>
    )
}