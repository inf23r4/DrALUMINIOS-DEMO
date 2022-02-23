import React from 'react'
import Home from './pages/Home'
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import Navbar from "./components/Navbar"
import Announcement from "./components/Announcement"
import Footer from "./components/Footer"
import ProductList from './pages/ProductList';
import ContactoPage from './pages/Contact';
import PageItemProduct from "./pages/PageItemProduct";
import PageTableProduct from "./pages/PageTableProduct"
import { CartProvider } from './context/CartProvider';



const App = () => {

  return (
  <CartProvider>
    <BrowserRouter>
      <Announcement/>
      <Navbar/>
          <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route exact path="/category/:id">
              <ProductList/>
          </Route>
          <Route exact path="/category/:id/:idProduct">
              <PageItemProduct/> 
          </Route>
          <Route exact path="/contacto">
              <ContactoPage/>
          </Route>
          <Route exact path="/checkout">
              <PageTableProduct/> 
          </Route>
          </Switch>
       <Footer/>
    </BrowserRouter>
  </CartProvider>
  
  )
};

export default App;