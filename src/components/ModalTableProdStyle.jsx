import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
`

const Wrapper = styled.div`
    background-color: white;
    width: 1400px;
    height: 600px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 10;
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export { Wrapper, Title, Container };