import Layout from "../Layout";
import ContainerProduitPannier from "../components/ContainerProduit/ContainerProduitPannier";
import UserFormCart from "../components/UserFormCart/UserFormCart";


export default function Panier() {
  return (
    <Layout>
      <ContainerProduitPannier />
      <UserFormCart/>
    </Layout>
  );
}
