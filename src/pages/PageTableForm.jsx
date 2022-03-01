import React, { useState, useContext, useEffect } from 'react'
import styled from "styled-components"
import CartContext from '../context/CartContext';
import { mobile } from "../responsive"

const Container = styled.div`
    height:500px;
    padding: 10px;
    background-image: url("https://www.viviendasaludable.es/wp-content/uploads/2020/11/Ventana-Aluminio-o-PVC.jpg");
    background-size: cover;
`;

const ContainerFragment = styled.div`
    width: 600px;
    background: #f5fafd;
    padding: 30px;
    margin: auto;
    border-radius: 4px;
    color: black;
    ${mobile({ width: "270px"})}
`;

const FormContainer = styled.form`
    display: grid;
    grid-template-columns: ${props => props.unColumn || "1fr 1fr"};
`;

const Title = styled.h1`
    font-size: 22px,;
    margin:0 0 20px;
`;

const ContainerInput = styled.div`
    margin:0 0 20px
`;

const Input = styled.input`
   width: 95%;
   padding: 10px;
   background: #f5fafd;
   border-radius: 4px;
   border: 0;
   outline: none;
   
`;

const Button = styled.button`
border:none;
padding: 10px;
background-color: white;
color:gray;
cursor: pointer;
font-weight: 600; 
`

const PageTableForm = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        telefono: '',
        email: '',
        mensaje:''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const sendDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }
    const { count, costoTotal, CantTotal,} = useContext(CartContext)

    useEffect(() =>{
        console.log(count);
        console.log(costoTotal());
        console.log(CantTotal());

    })

  return (
    <Container>
           <ContainerFragment>
             <Title>Contacto</Title>
            <FormContainer onSubmit={sendDatos}>
                <ContainerInput>
                    <Input type="text" placeholder="NOMBRE COMPLETO" onChange={handleInputChange} name="nombre"></Input>
                </ContainerInput>
                <ContainerInput >
                    <Input type="text" placeholder="TELEFONO" onChange={handleInputChange} name="telefono"></Input>
                </ContainerInput>
            </FormContainer>
            <FormContainer unColumn="1fr">
                <ContainerInput >   
                    <Input type="text" placeholder="E-MAIL"  onChange={handleInputChange} name="email"></Input>
                </ContainerInput>
                <Button type="submit">Enviar via Email</Button>
            </FormContainer>
          </ContainerFragment>
      </Container>
  )
}

export default PageTableForm