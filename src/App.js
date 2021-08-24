import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartContext from './context/cartContext';
import ProductsScreen from './components/pages/Seller/Products';
import ProfileScreen from './components/pages/Seller/Profile';
import AddProduct from './components/pages/Seller/AddProduct';
import UpdateProduct from './components/pages/Seller/UpdateProduct';
import Home from './components/pages/Home/Home';
import ViewProduct from './components/pages/ViewProduct';
import Farmers from './components/ProductRowOne';
import Contact from './components/pages/Contact';
import Signup from './components/pages/Signup';

function App() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState({});
  return (
    <CartContext.Provider value={{ cart, setCart, product, setProduct }} >
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/product' component={ViewProduct} />
        <Route path='/farmers' component={Farmers} />
        <Route path='/contact' component={Contact} />
        <Route path='/signup' component={Signup} />
        <Route path='/seller/product' component={ProductsScreen} />
        <Route path='/seller/profile' component={ProfileScreen} />
        <Route path='/seller/add_product' component={AddProduct} />
        <Route path='/seller/update_product' component={UpdateProduct} />
      </Switch>
    </Router>
    </CartContext.Provider>
  );
}

export default App;
