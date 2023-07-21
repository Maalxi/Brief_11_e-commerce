import Image from "next/image";
import Layout from "../Layout";

import FruitsList from "../APICalls/fruits";

export default function Panier() {
  return (
    <Layout>
      <h1>Page du panier</h1>
      <div>
        <div>
          <img src="/image/Cerise.png" alt="" width={70} height={70}/>
          <FruitsList></FruitsList>
        </div>
      </div>
    </Layout>
  );
}
