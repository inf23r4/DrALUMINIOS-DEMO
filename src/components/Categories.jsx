import { useState, useEffect } from "react";
import {db} from "../Firebase"
import { collection, getDocs, query} from "firebase/firestore";
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { mobile } from "../responsive"


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})}
`

const Categories = () => {

  const [ titleCategory, setTitleCategory ] = useState([])

  useEffect( () => {
    async function fetchData(){
    const querySnapshot = await getDocs(query(collection(db, "category")));
      let categoryArray = []
      querySnapshot.forEach((doc) => {
        categoryArray.push({...doc.data(), id: doc.id});
      });
      console.log(categoryArray)
      setTitleCategory(categoryArray)
    }
    fetchData();
}, [])
    return (
      <Container>
        {titleCategory.map((data) => (
          <CategoryItem data={data} key={data.id} />
        ))}
      </Container>
    );
  };

export default Categories;


