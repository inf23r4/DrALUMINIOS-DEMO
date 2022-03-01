import React, { useContext } from 'react'
import { MenuItem, Right, Logo, Button, Center, Left, Wrapper, Container} from "./NavbarStyle";
import { ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from "@material-ui/core";
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';





const Navbar = () => {

    const { count } = useContext(CartContext)

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
                   { count > 0 ?( <MenuItem ><Link to = "/checkout">
                    <Badge color="secondary" variant="dot">
                        <ShoppingCartOutlined />
                        </Badge>
                   </Link>     
                    </MenuItem>):(
                         <MenuItem ><Link to = "/checkout">
                            <ShoppingCartOutlined />
                         </Link>
                     </MenuItem>
                    ) }
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
