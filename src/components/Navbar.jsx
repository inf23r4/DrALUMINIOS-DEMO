import React, { useContext } from 'react'
import { MenuItem, Right, Logo, Button, Center, Left, Wrapper, Container} from "./NavbarStyle";
import { ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from "@material-ui/core";
import { Link } from 'react-router-dom'
import CartContex from '../context/CartContext';



const Navbar = () => {
    
    const { setShowModalTable } = useContext( CartContex );

    const openModalTable = () => {
        setShowModalTable(prev => !prev)
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to= "/">
                    <Button>DrALUMINIO</Button>
                    </Link>
                </Left>
                <Center>
                    <Logo>LOGO</Logo>
                </Center>
                <Right>
                    <Link to="/contacto"> 
                    <MenuItem>CONTACTO</MenuItem>
                    </Link>
                    <MenuItem onClick= {openModalTable}>
                        <Badge color="secondary" variant="dot">
                        <ShoppingCartOutlined />
                        </Badge></MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
