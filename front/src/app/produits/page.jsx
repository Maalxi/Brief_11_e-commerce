import Layout from "../Layout";
import CardContainer from "../components/CardContainer/CardContainer";
import ContainerProduit from "../components/ContainerProduit/ContainerProduit";
import '../components/Hero/Hero.css';

export default function Produits() {
  return (
    <Layout>
      <CardContainer />
      <div className="heroLine"></div>
      <ContainerProduit />
    </Layout>
  );
}
