import React, { useContext, useState } from 'react';
import { Button, Price,
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
          <Price>{Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    }).format(item.price)}</Price>
          
          <ItemCount
            setCount={setCount}
            count={count}
            min={1}
            stock={item.stock}
          />
            {selectCount ? (
                    <>
                        <div>
                            <Link to="/checkout">
                                <Button>
                                    Finish buying
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <Button>
                                    Continue buying
                                </Button>
                            </Link>
                        </div>
                    </>
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