import { 
    MailOutline,
    Phone,
    Room } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none"})}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "none"})}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>DrALUMINIO.</Logo>
                <Desc>
                
                </Desc>
            </Left>
            <Center><Title> Links</Title>
        <List>
          <ListItem>Nosotros</ListItem>
          <ListItem>Categorias</ListItem>
          <ListItem>Productos</ListItem>
          <ListItem>Obras</ListItem>
        </List></Center>
            <Right>
            <Title>Contacto</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 calle , Ciudad Localidad 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@DrALUMINO.com
        </ContactItem>
            </Right>
        </Container>
    )
};
export default Footer;
