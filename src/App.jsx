import React from 'react'
import Home from './pages/Home'
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import ProductList from './pages/ProductList';
import ContactoPage from './pages/Contact';



const App = () => {
  return (
    <BrowserRouter>
          <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route path="/category/:id">
              <ProductList/>
          </Route>
          <Route path="/contacto">
              <ContactoPage/>
          </Route>
          </Switch>
    </BrowserRouter>
     
  
  )
}

export default App;