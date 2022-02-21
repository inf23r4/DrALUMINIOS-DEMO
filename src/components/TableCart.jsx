import React, { useContext } from "react"
import ItemButtonCount from "./ItemButtonCount";
import {Button, SummaryItemPrice, SummaryItemText, SummaryItem, SummaryTitle, Summary, Hr, ProductPrice, 
     PriceDetail, ProductSize, ProductColor, ProductId, ProductName, Details, Image, ProductDetail,
    Product, Info,  TopText, TopTexts, TopButton, Top, Container } from "./TableCartStyle"
import CartContext from "../context/CartContext"


const TableCart = () => {

    const { cartItem, deleteProduct, costoTotal } = useContext(CartContext)

    const deleteItem = (item) => {
        deleteProduct(item)
    }
    return (
        <Container>
           <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>{cartItem.id}</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Info>
        {cartItem.map((item) => {
            return (
                <Product>
                <ProductDetail>
                <Image src={item.id} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {item.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
              <ItemButtonCount/>
              <ProductPrice>{Intl.NumberFormat('es-AR', {
                             style: 'currency',
                             currency: 'ARS',
                            }).format(item.price)}</ProductPrice>
              </PriceDetail>
              </Product>
            )
         })}
         </Info>
         <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    }).format(costoTotal)}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Container>
    )
}

export default TableCart;