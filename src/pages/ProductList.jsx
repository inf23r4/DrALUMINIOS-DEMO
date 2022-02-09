import {O, Select, FilterText, Filterption, FilterContainer, Title, Container} from "./ProductListStyles"
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Categories from "../components/Categories"




const ProductList = () => {
  return (
    <Container>
      <Navbar />

      <Products/>
      <Categories/>
      
      <Footer />
    </Container>
  );
};

export default ProductList;