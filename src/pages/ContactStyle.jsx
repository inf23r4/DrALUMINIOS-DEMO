import styled from "styled-components";
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
const TextArea = styled.textarea`
   width: 95%;
   max-width: 95%;
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

export { Container, ContainerFragment,  FormContainer, Title, ContainerInput ,Input, Button, TextArea };