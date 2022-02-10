import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Categories from "../components/Categories"
import Announcement from "../components/Announcement"




const ProductList = () => {
  return (
    <>
      <Announcement/>
      <Navbar />
      <Products/>
      <Categories/>
      <Footer />
    </>
  );
};

export default ProductList;