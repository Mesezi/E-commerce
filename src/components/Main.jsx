import { ShoppingCart, Heart} from 'iconsax-react';
import { useState } from 'react';
import Home from './Home';
import Product from './Product';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Cart';
import Search from './Search';
import Login from './Login';
import Register from './Register';
import KidsPage from './KidsPage'
import MenPage from './MenPage'
import WomenPage from './WomenPage';
import ScrollToTop from './ScrollToTop';
import WishList from './WishList';

function Main({allItems, setAllItems,modifyCart, cartItems, updateLike, toast, like}) {

const[categoryItems, setCategoryItems] = useState('Men')
const[productPage, setProductPage] = useState(allItems[0])

    return (

<ScrollToTop>
  <main className="pb-3">
<Routes>
<Route path="/" element={  <Home allItems={allItems} productPage={productPage}
 setAllItems={setAllItems} modifyCart={modifyCart} setProductPage={setProductPage} updateLike={updateLike}/> } />

<Route path='/details' element={  <Product allItems={allItems} productPage={productPage}
 setAllItems={setAllItems} modifyCart={modifyCart} cartItems={cartItems} setProductPage={setProductPage} updateLike={updateLike}/>}>
</Route>

<Route path='/men' element={  <MenPage allItems={allItems} productPage={productPage}
 setAllItems={setAllItems} modifyCart={modifyCart} cartItems={cartItems} setProductPage={setProductPage} updateLike={updateLike}/>}>
</Route>

<Route path='/women' element={  <WomenPage allItems={allItems} productPage={productPage}
 setAllItems={setAllItems} modifyCart={modifyCart} cartItems={cartItems} setProductPage={setProductPage} updateLike={updateLike}/>}>
</Route>

<Route path='/kids' element={  <KidsPage allItems={allItems} productPage={productPage}
 setAllItems={setAllItems} modifyCart={modifyCart} cartItems={cartItems} setProductPage={setProductPage} updateLike={updateLike}/>}>
</Route>

<Route path='/cart' element={  <Cart allItems={allItems} productPage={productPage}
 setAllItems={setAllItems} modifyCart={modifyCart} cartItems={cartItems} setProductPage={setProductPage}/>}>
</Route>

<Route path='/search' element={  <Search allItems={allItems} productPage={productPage}
 setAllItems={setAllItems} modifyCart={modifyCart} cartItems={cartItems} setProductPage={setProductPage} updateLike={updateLike}/>}>
</Route>

<Route path='/login' element={  <Login allItems={allItems} productPage={productPage}
 setAllItems={setAllItems} modifyCart={modifyCart} cartItems={cartItems} setProductPage={setProductPage}/>}>
</Route>

<Route path='/register' element={  <Register allItems={allItems} productPage={productPage}
 setAllItems={setAllItems} modifyCart={modifyCart} cartItems={cartItems} setProductPage={setProductPage}/>}>
</Route>

<Route path='/wishlist' element={  <WishList allItems={allItems} productPage={productPage} updateLike={updateLike}
 setAllItems={setAllItems} modifyCart={modifyCart} cartItems={cartItems} setProductPage={setProductPage} like={like}/>}>
</Route>

</Routes>   </main>
</ScrollToTop>


    )
  }
  
  export default Main
  