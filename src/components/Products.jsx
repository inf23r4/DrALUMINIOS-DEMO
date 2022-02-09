import styled from 'styled-components'
import Product from './Product'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {db} from "../Firebase"
import { collection, getDocs, query,} from "firebase/firestore";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = () => {

    const [ product, setproduct ] = useState([])

    let { id } = useParams();
    
    console.log(id);

  useEffect( () => {
    async function fetchData(){
    const querySnapshot = await getDocs(query(collection(db, `category/${id}/product` )));
      let productArray = []
      querySnapshot.forEach((doc) => {
        productArray.push({...doc.data(), id: doc.id});
      });
      setproduct(productArray)
      console.log("IdCategory",id)
    }
    fetchData();
}, [id])
    return (
        <Container>
            {product.map((data)=>( 
                <Product item={data} key={data.id}/>
            ))}            
        </Container>
    )
}

export default Products;