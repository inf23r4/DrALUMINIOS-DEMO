import React from 'react'
import { Add, Remove } from "@material-ui/icons";
import { AmountContainer, AddContainer,  Amount, } from "./ItemProdutStyle";

const ItemCount = ({ min, stock, count, setCount }) => {
  const add = () => {
      if (count < stock) setCount(count + 1)
  }

  const subtract = () => {
      if (count > min) setCount(count - 1)
  }

  return (
      <>
        {stock > 0 && (
          <>
            <AddContainer>
              <AmountContainer>
                <Remove  onClick={subtract} />
                  <Amount>{count}</Amount>
                  <Add disabled={count === stock} onClick={add} />
              </AmountContainer>        
            </AddContainer>
                  </>
              )}
      </>
  )
}


export default ItemCount