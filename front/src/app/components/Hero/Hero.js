import Image from "next/image";
import './Hero.css';

export default function Hero() {
    return (
        <>
            <div className="heroContainer">

                <div className="heroContainerLeft">
                    <h1 className="heroTitle">Oubliez la crise,
                        <br />
                        succombez à la cerise !</h1>
                    <button className="heroBtn">Voir nos produits</button>
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