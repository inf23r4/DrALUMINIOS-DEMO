import Products from '../components/Products';
import Slider from '../components/Slider';
import Categories from "../components/Categories";
import styled from "styled-components"

const Container  = styled.div``  

const Home = () => {

    return (
        <Container>
            <Slider/>
            <Categories/>
            <Products/>
        </Container>
    )
}

export default Home
