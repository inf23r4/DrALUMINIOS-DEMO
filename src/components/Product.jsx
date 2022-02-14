import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
import {Image, Icon, Container, Info, Circle} from "./ProductStyle"
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';


const Product = ({ item }) => {

  let { id } = useParams()

    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Link to= {`/category/${ id }/${item.id}`}>
        <Icon>
          <SearchOutlined />
        </Icon>
        </Link>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
        </Container>
    )
}

export default Product
