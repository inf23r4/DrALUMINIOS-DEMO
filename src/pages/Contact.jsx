import React, { useState } from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Container, FormContainer, ContainerFragment, Title, ContainerInput, Input, Button, TextArea } from "./ContactStyle"

const ContactoPage = () => {


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

    return (
      <Container>
        <Announcement/>
        <Navbar/>
           <ContainerFragment>
             <Title>Contacto</Title>
            <FormContainer onSubmit={sendDatos}>
                <ContainerInput>
                    <Input type="text" placeholder="NOMBRE" onChange={handleInputChange} name="nombre"></Input>
                </ContainerInput>
                <ContainerInput >
                    <Input type="text" placeholder="TELEFONO" onChange={handleInputChange} name="telefono"></Input>
                </ContainerInput>
            </FormContainer>
            <FormContainer unColumn="1fr">
                <ContainerInput >   
                    <Input type="text" placeholder="E-MAIL"  onChange={handleInputChange} name="email"></Input>
                </ContainerInput>
                <ContainerInput >
                    <TextArea type="text" placeholder="MENSAJE" onChange={handleInputChange} name="mensaje"></TextArea>
                </ContainerInput>
                <Button type="submit">Enviar via Email</Button>
            </FormContainer>
          </ContainerFragment>
          <Footer/>
      </Container>
    );
}
 
export default ContactoPage;