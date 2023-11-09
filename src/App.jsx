import "./App.css";
import { useState } from "react";
import Home from "../src/pages/Home";
// import Product from '../src/pages/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../src/components/ScrollToTop";
import Product from "./pages/Product";
import WishList from "./pages/WishList";
// import WishList from './WishList';
import Layout from "./components/Layout";
import store from "./store";
import { Provider, useSelector } from "react-redux";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Search from "./pages/Search";

function App() {
  return (
    <Provider store={store}>
      <ScrollToTop>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/:category/:id" element={<Product />}></Route>
            <Route path="/:category" element={<Category />}></Route>
            <Route path="/cart" element={<Cart />}></Route>

            <Route path="/wishlist" element={<WishList />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/search" element={<Search />}></Route>
            {/*
<Route path='/wishlist' element={  <WishList />}>
</Route> */}
          </Routes>
        </Layout>
      </ScrollToTop>
    </Provider>
  );
}

export default App;
