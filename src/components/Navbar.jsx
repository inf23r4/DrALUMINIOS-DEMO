import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive"
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 60px;
  ${mobile({ height: 45})}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 25px"})}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`

const Center = styled.div`
flex: 1;
text-align: center;
${mobile({ display: "none"})}
`
const Button = styled.button`
border:none;
color: black;
background-color: white;
font-size: 29px;
font-weight: bold;
${mobile({ fontSize: 14})}
`
const Logo = styled.h1`
${mobile({ fontSize: 14})}
`

const Right = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
${mobile({ flex: 2, justifyContent: "flex-end"})}
`
const MenuItem = styled.div`
 font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: 9, margin:4, })}
`

const Navbar = () => {
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
                    <MenuItem>PRODUCTOS</MenuItem>
                    <MenuItem>CONTACTO</MenuItem>
                    <MenuItem><Badge color="secondary" variant="dot">
                        <ShoppingCartOutlined />
                        </Badge></MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
