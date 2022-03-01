import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
`
const H1 = styled.h1`
    display: flex;
    align-items: center;
`

const ProductMenssage = () => {

    return (
        <Container>
            <H1>
                no hay nada en el carrito
            </H1>
        </Container>
    )
}

export default ProductMenssage;