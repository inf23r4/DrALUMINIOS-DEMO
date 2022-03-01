import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components"
import {db} from "../Firebase"
import { getDoc, query, doc } from "firebase/firestore";
import ItemProduct from "../components/ItemProduct";


const Container = styled.div`
  background-image: url("https://aluminiosciupal.com/wp-content/uploads/realizar-el-mantenimiento-de-las-ventanas-de-aluminio.jpg");
  background-size: cover;
`

function PageItemProduct() {


  const [ itemProduct, setItemProduct ] = useState([])

    let { id } = useParams();
    let { idProduct } = useParams()

    useEffect( () => {
        async function fetchData(){
        const querySnapshot = await getDoc(query(doc(db, `category/${ id }/product/${idProduct}`)));
        if (querySnapshot.exists()) {
          console.log("Document data:", querySnapshot.data());
          setItemProduct({ id: querySnapshot.id, ...querySnapshot.data() });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          }
          
        }
        fetchData();
    }, [idProduct, id])

  return (
    <>
      <Container>
        <ItemProduct item= {itemProduct}/>
      </Container>
    </>
  
  )
}

export default PageItemProduct;