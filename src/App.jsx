import React from 'react'
import Home from './pages/Home'
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import ProductList from './pages/ProductList';


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
          </Switch>
    </BrowserRouter>
     

  )
}

export default App;