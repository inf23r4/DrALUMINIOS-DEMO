import React, { useContext } from "react"
import ItemButtonCount from "./ItemButtonCount";
import { ProductPrice, 
     PriceDetail, ProductSize, ProductColor, ProductId, ProductName, Details, Image, ProductDetail,
    Product, Button, SummaryItemPrice, SummaryItemText, SummaryItem, SummaryTitle,
    Summary,  Info,  TopText, TopTexts, TopButton, Top, Container } from "./TableCartStyle"
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";


const TableCart = () => {

    const { cartItem, deleteProduct, cantTotal, costoTotal } = useContext(CartContext)

    const deleteItem = (item) => {
        deleteProduct(item)
    }
    return (
      <>
        <Container>
        <Top>
       <TopButton>CONTINUE SHOPPING</TopButton>
       <TopTexts>
         <TopText></TopText>
         <TopText>Your Wishlist ({cantTotal()})</TopText>
       </TopTexts>
        <Link to="/formulario">
       <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Link>
     </Top>
     <Info>
        {cartItem.map((item) => {
            return (
                <Product key={item.id}>
                <ProductDetail>
                <Image src={item.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {item.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>{item.id}
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
         </SummaryItem>
         <SummaryItem type="total">
           <SummaryItemText>Total</SummaryItemText>
           <SummaryItemPrice>${costoTotal()}</SummaryItemPrice>
         </SummaryItem>
         <Link to ="/formulario">
          <Button>CHECKOUT NOW</Button>
         </Link>
       </Summary>
     </Container> 
      </>
    )
}

export default TableCart;