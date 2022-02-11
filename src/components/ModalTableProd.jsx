import styled from "styled-components"
import React from 'react'


export const ModalTable =({showModalTable, setShowModalTable})=>{
    return<>{ showModalTable ? <Table/>: null }</>
    
};

const Container = styled.div`
    width: 800px;
    height: 500px,
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: 000;
    position: relative;
    z-index: 10;
    border-radius: 4px;
`

const Title = styled.p``


function Table() {
    return (
        <Container>
            <Title>Carrito</Title>
            <input type="text" className="form-control" placeholder="Usuario"/>
            <br/>
            <input type="text" className="form-control" placeholder="Contraseña"/>
            <br/>
            <button className="btn btn-dark">Aceptar</button>
        </Container>
    )
};
export default Table;