import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from './components/NavBar/NavBar';
import { CarouselBs } from './components/CarouselBs/CarouselBs';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/MiContext';
//import { useState } from 'react';
import { CartScreen } from './components/CartScreen/CartScreen';
// import { ItemUi } from './components/ItemListContainer/ItemUi';



function App() {
  
 
  return (
    <div className="App">  

      <CartProvider>
        <BrowserRouter>

          <NavBar logo="https://t3.ftcdn.net/jpg/01/29/14/26/360_F_129142615_hM0CqIHqSOJP2eMCZJU3GhB6lmqS5gHc.webp" link1 = "Catálogo" link2 = "About Us" link3="SS22'" ruta1="/productos" ruta2="/aboutUs" ruta3="/season"/>

          <Switch>
            <Route exact path="/">
              <CarouselBs tit1="Simplicity." tit2="Comfort." tit3="Know us." img1="https://images.unsplash.com/photo-1570967108084-7aacf8184ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" img2="https://images.unsplash.com/photo-1557600067-173369923ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" img3="https://images.unsplash.com/photo-1605033272404-1c2874375ef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
              
            </Route>

            <Route exact path="/details/:itemId">
                <ItemDetailContainer />
            </Route>

            <Route exact path="/productos">
              <ItemListContainer />
            </Route>

            <Route exact path="/productos/:categoryId">
              <ItemListContainer />
            </Route>

            <Route exact path="/cart">
              <CartScreen />
            </Route>

            <Route path="*">
                <h2>404</h2>
            </Route>
          </Switch>

        </BrowserRouter>

      </CartProvider>
      
    </div>
  );
}

export default App;
