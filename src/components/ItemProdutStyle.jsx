import styled from "styled-components"
import { mobile } from "../responsive"

const Wrapper = styled.div`
  background-color: transparent;
  padding: 20px;
  display: flex;
  justify-content: center;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  background: white;
  padding: 5px;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  background: white;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  margin: 20px;
  font-weight: 200;
  position: relative;
  top: 80px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  position: relative;
  top: 200px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  width: 70px;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  top: 430px;
  left: 95px;
  &:hover{
      background-color: #f8f4f4;
  }
`;
const ContainerButton = styled.div`

`
const ItemContainer = styled.div`
  position: relative;
  top: 470px;
  left: 0px;
`
const ContainerPrice = styled.div`
  position: relative;
  top: 445px;
`

export { ContainerPrice, ItemContainer, ContainerButton, Button, Amount, AmountContainer, AddContainer, Price,
     Desc, Title, InfoContainer, Image, ImgContainer, Wrapper};