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



const App = () => {


  return (
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
          <Route exact path="/category/:id/producto::idProduct">
              <PageItemProduct/> 
          </Route>
          </Switch>
    </BrowserRouter>
     
  
  )
}

export default App;