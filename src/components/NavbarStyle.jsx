import styled from 'styled-components';
import { mobile } from "../responsive"

const Container = styled.div`
  background-color: white;
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
const MenuItem = styled.button`
    border:none;
    color: black;
    background-color: white;
    font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: 9, margin:4, })}
`

export { MenuItem, Right, Logo, Button, Center, Left, Wrapper, Container};