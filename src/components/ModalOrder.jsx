import React from 'react'
import {Container, ContainerFragment, ContainerInput, Button, Input, Title, FormContainer} from "./ModalOrderStyled"

export const ModalOrder =({showModalOrder, setShowModalOrder})=>{
    return<>{ showModalLog ? <Order/>: null }</>
    
};

const Order = () => {
  return (
    <Container>
    <ContainerFragment>
      <Title>Contacto</Title>
     <FormContainer onSubmit={sendDatos}>
         <ContainerInput>
             <Input type="text" placeholder="NOMBRE" onChange={e =>{ setName(e.target.name)}} value={name} name="Name"></Input>
         </ContainerInput>
         <ContainerInput >
             <Input type="text" placeholder="TELEFONO" onChange={e =>{ setPhone(e.target.name)}} value={phone} name="telefono"></Input>
         </ContainerInput>
     </FormContainer>
     <FormContainer unColumn="1fr">
         <ContainerInput >   
             <Input type="text" placeholder="E-MAIL"  onChange={e =>{ setEmail(e.target.value)}} value ={email} name="email"></Input>
         </ContainerInput>
         <Button type="submit">Enviar via Email</Button>
     </FormContainer>
        </ContainerFragment>
    </Container>
  )
}

export default Order