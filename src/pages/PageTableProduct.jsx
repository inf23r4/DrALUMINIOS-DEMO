import React, { useContext } from 'react';
import { } from "../components/TableCartStyle";
import { db } from "../Firebase"
import { doc, setDoc, Timestamp } from "firebase/firestore";
import TableCart from '../components/TableCart';
import CartContext from "../context/CartContext"
import ProductMenssage from '../components/ModalProductMenssage';



const PageTableProduct = () => {

  let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    console.log(output);

  const handleClickOrdenar = async() => {
   const docData = {
      title: "Hello world!",
      numberExample: 3.14159265,
      dateExample: Timestamp.fromDate(new Date(output)),
      arrayExample: [5, true, "hello"],
      nullExample: null,
      objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
};
await setDoc(doc(db, "Ordenes", `${output}`), docData)
  }

  const { costoTotal, cantTotal} = useContext(CartContext)

  console.log(costoTotal)

  return (
    <>
        
      {cantTotal() > 0 ? (<><TableCart/></>) : (<><ProductMenssage/></>)}
  
  </>
  )
}

export default PageTableProduct;