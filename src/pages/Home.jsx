import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Categories from "../components/Categories";
import styled from "styled-components"
import { ModalTable } from "../components/ModalTableProd"
import { useContext } from "react"
import CartContext from '../context/CartContext';

    const Container  = styled.div`

    `

const Home = () => {

    const { showModalTable, setShowModalTable } = useContext( CartContext )

    return (

        <Container>
            <ModalTable showModalTable={showModalTable} setShowModalTable={setShowModalTable}/>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Footer/>
        </Container>
    )
}

export default Home
