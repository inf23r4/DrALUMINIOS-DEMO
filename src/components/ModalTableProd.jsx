import { Wrapper, Title, Container } from "./ModalTableProdStyle";
import React from 'react'

export const ModalTable =({showModalTable, setShowModalTable})=>{
    return<>{ showModalTable ? <Table/>: null }</>
    
};


function Table() {
    return (
        <Container> 
            <Wrapper>
                <Title>YOUR BAG</Title>
        
            </Wrapper>
        </Container>
    )
};
export default Table;