import React, { useContext, useState } from 'react';
import { Button, Price, ItemContainer, ContainerButton, ContainerPrice,
   Desc, Title, InfoContainer, Image, ImgContainer, Wrapper} from "./ItemProdutStyle";
import ItemCount from "./ItemButtonCount";
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';




function ItemProduct ({item}) {

  const [count, setCount] = useState(1)
  const [selectCount, setSelectCount] = useState(false)
    const { productsAdd } = useContext(CartContext)

    const handleClickComprar = () => {
        if (count > 0) {
            setSelectCount(true)
            productsAdd({
                id: item.id,
                name: item.title,
                img: item.img,
                count,
                price: item.price,
                stock: item.stock,
            })
        }
    }


  return (
      <Wrapper>
        <ImgContainer>
          <Image src= {item.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.id}</Desc>
          <ContainerPrice>
            <Price>{Intl.NumberFormat('es-AR', {
              style: 'currency',
              currency: 'ARS',
              }).format(item.price)}</Price>
          </ContainerPrice>
          <ItemContainer>
            <ItemCount
            setCount={setCount}
            count={count}
            min={1}
            stock={item.stock}
          />
          </ItemContainer>
            {selectCount ? (
                    <ContainerButton>
                        <div>
                            <Link to="/checkout">
                                <Button>
                                    Finalizar Oreden
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <Button>
                                    Continuar 
                                </Button>
                            </Link>
                        </div>
                    </ContainerButton>
                ) : (
                    <Button
                        onClick={handleClickComprar}
                        disabled={item.stock === 0}
                    >
                        Add
                    </Button>
                )}
        </InfoContainer>
      </Wrapper>
  
  )
}

export default ItemProduct;