import React from 'react';
import './App.css';
//import { useQuery, gql } from '@apollo/client';
import {BrowserRouter , Route , Routes} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import AllScreen from './Screens/ProductListPage/HomePage/AllScreen';
import ClothesScteen from './Screens/ProductListPage/ClothesPage/ClothesScreen';
import TechScreen from './Screens/ProductListPage/TechPage/TechScreen';
import ProductDetails from './Screens/ProductDescriptionPage/ProductDetails';
import CartPage from './Screens/CartPage/CartPage';




export default class App extends React.Component{
  render(){
    return( 
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<AllScreen/>}/>
          <Route path='/clothes' element={<ClothesScteen/>}/>
          <Route path='/tech' element={<TechScreen/>}/>
          <Route path='/details/:id' element={<ProductDetails/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

