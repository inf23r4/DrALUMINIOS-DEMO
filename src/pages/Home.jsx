import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Categories from "../components/Categories";


const Home = () => {
    return (

        <div>

            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Footer/>
        </div>
    )
}

export default Home
