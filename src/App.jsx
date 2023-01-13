import { useEffect, useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { Facebook, Messages3, Instagram} from 'iconsax-react';
import data from './components/data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { json } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  const[allItems, setAllItems]= useState(data)
  const[cartItems, modifyCart] = useReducer(cartReducer,JSON.parse(sessionStorage.getItem('cart')) || [])


  const[like,setLike]= useState(JSON.parse(sessionStorage.getItem('like')) || [])

  useEffect(()=>{
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
  },[cartItems])

  useEffect(()=>{
    sessionStorage.setItem('like', JSON.stringify(like));
  },[like])


    function cartReducer(state, action){
    if(action.type === 'INC'){

      state = state.map(item=>{
        if(item.id === action.id){

          if(item.quantity === 9){return item}

          else{return {...item, quantity: item.quantity + 1}}
        }

       else{ return item}
      })

    return state
    }

   else if(action.type === 'DEC'){

    state = state.map(item=>{
      if(item.id === action.id){

        if(item.quantity === 1){return item}

        else{return {...item, quantity: item.quantity - 1}}
      }

     else{ return item}
    })

  return state
    }

   else if(action.type === 'UPDATE'){
let index = state.findIndex(object => { return object.id === action.details.id; })

if(index !== -1){
  state.splice(index,1)
  toast.info(`${action.details.name} has been removed from your cart`, {
    position: "bottom-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
    });
}

else{
  action.quantity ? state.push({...action.details, quantity:action.quantity}) : state.push({...action.details, quantity:1})
  toast.success(`${action.details.name} has been added to your cart`, {
    position: "bottom-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
    });
 }
return [...state]
}

else{
let index = state.findIndex(object => { return object.id === action.details.id; })
state.splice(index,1)
return [...state]
}


    }

useEffect(()=>{

  let arr = allItems.map(item=>{
    return {...item, like:false, inCart:false, selectedSize:'S'}
  })


if(like && like.length > 0){
  arr = arr.map(item=>{
    if(like.indexOf(item.id) != -1){
      return {...item, like:true}
    }
    else{return {...item, like:false}}
  }) 
}


if(cartItems && cartItems.length > 0){ 
arr = arr.map(item=>{

if((cartItems.findIndex(object => { return object.id === item.id; })) !== -1){
  return {...item, inCart: true}
}

else{
  return {...item, inCart: false}
}
})}
  
setAllItems(arr)

},[cartItems, like])

const updateLike = (id)=>{

  let index = like.indexOf(id)

  if(index === -1){
    setLike(prev=>[...prev,id])
    toast.success(`Item has been added to your WishList`, {
      position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
      }); 

  } 
  else {
    setLike(like.filter(el=> el !== id))
  toast.info(`Item has been removed from your Wishlist`, {
    position: "bottom-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
    });
  }

}






  return (
     <>
     <article className="promo flex  px-3 py-2">
<div className=" flex gap-2">
<Facebook size="32" variant="Bold"/>
<Instagram size="32" variant="Bold"/>
<Messages3 size="32" variant="Bold"/>
</div>

<p className='hidden md:block'>FREE SHIPPING ABOVE N10,000</p>

<div className='ml-auto md:ml-0'>
  <span>
    NAIRA
  </span>
</div>

</article>
<Navbar allItems={allItems} setAllItems={setAllItems}  modifyCart={modifyCart} cartItems={cartItems} />

<Main allItems={allItems} setAllItems={setAllItems} modifyCart={modifyCart} like={like}
cartItems={cartItems} updateLike={updateLike} toast={toast}/>

 <ToastContainer position="bottom-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
progressClassName="toastProgress"
bodyClassName="toastBody"
/>
<Footer />
     </>
  )
}

export default App
