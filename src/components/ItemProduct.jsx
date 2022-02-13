import React, {useState} from 'react';
import styled from "styled-components"

const Container = styled.div`

`

function PageItemProduct() {

    const [ itemProduct, setItemProduct ] = useState([])

    let { id } = useParams();

    useEffect( () => {
        async function fetchData(){
        const querySnapshot = await getDocs(query(collection(db, `category/${ id }/product/:idProduct` )));
          let itemArray = []
          querySnapshot.forEach((doc) => {
            itemArray.push({...doc.data(), id: doc.id});
          });
          setItemProduct(productArray)
          console.log("IdCategory",id)
        }
        fetchData();
    }, [id])

  return (
    <Container> 
        {itemArray.map((item) =>{
            return (
                <Container>
      <Navbar />
      <Announcement />
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
    </Container>
            )
        })}
    </Container>
  
  )
}

export default PageItemProduct;