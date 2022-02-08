import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;


const CategoriesPage = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      
      <Footer />
    </Container>
  );
};

export default CategoriesPage;
