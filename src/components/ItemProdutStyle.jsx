import styled from "styled-components"
import { mobile } from "../responsive"

const Wrapper = styled.div`
  background-color: transparent;
  padding: 10px;
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
  padding: 20px;
  background: white;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  margin: 20px;
  margin-top: 50px;
  height: 100px;
  font-weight: 200;
`;

const Desc = styled.p`
  margin-bottom: 20px;
  height: 350px;
  ${mobile({ top: "20px" })}
`;

const ContainerPrice = styled.div`
  margin-top: 20px;
  margin:20px;
`

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
  &:hover{
      background-color: #f8f4f4;
  }
`;



const ItemContainer = styled.div`

`;


const ContainerButton = styled.div`
 display: flex;
`
const WrapperButton = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;

`
const ButtonModal = styled.button`
    padding: 20px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;


export {ButtonModal,ContainerButton, WrapperButton, ContainerPrice, ItemContainer, Button, Amount, AmountContainer, AddContainer, Price,
     Desc, Title, InfoContainer, Image, ImgContainer, Wrapper};