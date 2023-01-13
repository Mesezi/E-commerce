
import ItemCard from './ItemCard';
import { ArrowRight2, Trash,Add, Minus } from 'iconsax-react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';


function Cart({allItems,item,modifyCart, cartItems, 
  setProductPage, productPage, categoryPage, setCategoryPage}) {



  return (
    <>
     <div className="banner">
      <img src='https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'/>
       
       <article className='flex items-center justify-center'>
       <span>Cart</span>
       </article>
        </div>

        <div className='navigation mb-5 p-4'> <p className='container mx-auto px-4 flex items-center'>Home  <ArrowRight2 size="16"/>  Cart</p></div>

 {cartItems.length < 1 ?<section className='container mx-auto px-4'>
    <p>Your shopping cart is empty</p>
    <div className='flex justify-end mt-7'>
        <p className='cart-option'>Continue</p>
        </div>
 </section> :
  <section className='container mx-auto p-4'>
    
  <div className="cart-page flex flex-col gap-5">
     <div>
  <p className='font-bold'>IMAGE</p>
  <p className='hidden md:block font-bold' >PRODUCT NAME</p>
  <p className='hidden md:block font-bold'>PRICE</p>
  <p className='font-bold'>QUANTITY</p>
  <p className='font-bold'>TOTAL</p>
     </div>
     <hr />
  
     {
      cartItems.map(item=>{
          return <div key={item.id}>
              <article className=''> <img src={item.image} alt="" />
              <p className='md:hidden font-bold'>{item.name}</p></article>
  
              <p className='hidden md:block'>{item.name}</p>
              <p className='hidden md:block'>&#8358;{item.price}</p>
  
  
              <article className='flex gap-2 justify-center'>
  <div className="quantity flex items-center px-1 gap-2 justify-center" >
  <button onClick={()=>modifyCart({type:'DEC', id:item.id})} ><Minus size="16"/></button>
          <p> {item.quantity}</p>
  
  <button onClick={()=>modifyCart({type:'INC', id:item.id})} ><Add size="16" /></button>
  </div>
  
  <button onClick={()=>modifyCart({type:'REMOVE', details:item})}><Trash size="16"/></button>
  
              </article>
  
              <p className='font-bold'>&#8358;{item.quantity * item.price}</p>
              
              </div>
      })
     }
  
  </div>

  <div className='flex flex-col gap-8 md:pr-5 mt-8'>
    <p className='text-end total'>Total: <span>&#8358;{
    cartItems.reduce(
      (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity),
      0
    )
    }</span></p>

    <article className='flex justify-between'>
        <NavLink to="/">
        <p className='cart-option'>Continue Shopping</p>
        </NavLink>
        <p className='cart-option add'>Checkout</p>
    </article>
  </div>
  
          </section>
 }   
 

  </>

  )
}

export default Cart
