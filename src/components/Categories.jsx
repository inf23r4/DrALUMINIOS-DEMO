import { useState, useEffect } from "react";
import {db} from "../Firebase"
import { collection, getDocs, query} from "firebase/firestore";
import styled from 'styled-components'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
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
      setTitleCategory(categoryArray)
    }
    fetchData();
}, [])
    return (
      <Container>
        {titleCategory.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    );
  };

export default Categories;