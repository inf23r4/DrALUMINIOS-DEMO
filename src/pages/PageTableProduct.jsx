import React, { useState, useContext   } from 'react';
import TableCart from '../components/TableCart';
import CartContext from "../context/CartContext"


const PageTableProduct = () => {

  const { count } = useContext(CartContext)

  const { table, setTable } = useState()

  return (
      <>
         <TableCart/>
      </>
  )
}

export default PageTableProduct;