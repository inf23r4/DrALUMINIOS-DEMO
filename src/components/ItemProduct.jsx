import React from 'react';
import { Add, Remove } from "@material-ui/icons";
import { Button, Amount, AmountContainer, AddContainer, FilterSizeOption, 
  FilterSize, FilterColor, Filter, FilterTitle, FilterContainer, Price,
   Desc, Title, InfoContainer, Image, ImgContainer, Wrapper} from "./ItemProdutStyle";



function ItemProduct ({item}) {

  return (
      <Wrapper>
        <ImgContainer>
          <Image src= {item.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Price>{item.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="blanco" />
              <FilterColor color="aluminio" />
            </Filter>
            <Filter>
              <FilterTitle>Medidas</FilterTitle>
              <FilterSize>
                <FilterSizeOption>#1</FilterSizeOption>
                <FilterSizeOption>#2</FilterSizeOption>
                <FilterSizeOption>#3</FilterSizeOption>
                <FilterSizeOption>#4</FilterSizeOption>
                <FilterSizeOption>#5</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
  
  )
}

export default ItemProduct;