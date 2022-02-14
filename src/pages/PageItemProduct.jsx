import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {db} from "../Firebase"
import { getDoc, query, doc } from "firebase/firestore";
import ItemProduct from "../components/ItemProduct"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"


const Container = styled.div`
  background-image: url("https://aluminiosciupal.com/wp-content/uploads/realizar-el-mantenimiento-de-las-ventanas-de-aluminio.jpg");
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center center;
  position: relative
  filter: blur(5px);
  z-index:0;
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
          setItemProduct(querySnapshot.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          }
          
        }
        fetchData();
    }, [])

  return (
    <>
      <Announcement/> 
      <Navbar/>
      <Container>
        <ItemProduct item= {itemProduct}/>
      </Container>
      <Footer/>
    </>
  
  )
}

export default PageItemProduct;