import React from 'react'
import Home from './pages/Home'
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import ProductList from './pages/ProductList';
import ContactoPage from './pages/Contact';
import PageItemProduct from "./pages/PageItemProduct"
import { CartProvider } from './context/CartProvider'



const App = () => {


  return (
    <CartProvider>
    <BrowserRouter>
          <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route exact path="/category/:id">
              <ProductList/>
          </Route>
          <Route exact path="/contacto">
              <ContactoPage/>
          </Route>
          <Route exact path="/category/:id/:idProduct">
              <PageItemProduct/> 
          </Route>
          </Switch>
    </BrowserRouter>
    </CartProvider>
  
  )
}

export default App;