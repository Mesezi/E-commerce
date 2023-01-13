import { SearchNormal1, Profile, ShoppingCart, HambergerMenu, CloseCircle
,ArrowUp2, ArrowDown2, Trash,Add, Minus} from 'iconsax-react';
import logo from '../assets/cover.png'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({modifyCart, cartItems}) {


function menuToggle(arg){
const menuList = document.querySelector('.menu-list')
arg ? menuList.classList.add('active') : menuList.classList.remove('active')
}

useEffect(()=>{
  const cartDetails = document.querySelector('.cart-details')
  const cart = document.querySelector('.cart')

  cart.addEventListener('mouseenter',()=>{
    cartDetails.classList.add('show')
  })

  cart.addEventListener('mouseleave',()=>{
    cartDetails.classList.remove('show')
  })

}, [])



  return (
    <header className="sticky inset-0">
<nav className='flex'>
<NavLink to='/' className='md:pl-8'>
  <img className='logo' src={logo}></img>
</NavLink>

<ul className='py-10 px-3 m-0 flex flex-col gap-8 items-center md:items-start md:p-0 md:flex-row md:gap-3 self-center menu-list'>
<li className='self-end md:hidden'><CloseCircle size="24" onClick={()=>menuToggle(false)}/></li>
<li  onClick={()=>menuToggle(false)} className='md:hidden'><NavLink to='/'>Home</NavLink></li>
  <li onClick={()=>menuToggle(false)}><NavLink to='/men' onClick={()=>{setCategoryPage('Men')}}>Men</NavLink></li>
  <li onClick={()=>menuToggle(false)}><NavLink to='/women' onClick={()=>{setCategoryPage('Women')}}>Women</NavLink></li>
  <li onClick={()=>menuToggle(false)}><NavLink to='/kids' onClick={()=>{setCategoryPage('Kids')}}>Kids</NavLink></li>
  <li onClick={()=>menuToggle(false)}><NavLink to='/wishlist' >Wishlist</NavLink></li>
  <li onClick={()=>menuToggle(false)}><NavLink to='/' >Contact</NavLink></li>
  <li onClick={()=>menuToggle(false)} className='md:hidden'><NavLink to='/login' >Sign In</NavLink></li>
</ul>

<div className='flex ml-auto icon-con md:pr-8'>
  <div to='/search'className='flex justify-center items-center'>
    <NavLink to='/search'>
       <SearchNormal1 size="32"/>
    </NavLink>
   </div>
  <div className='hidden md:flex justify-center items-center'><NavLink to='/login' ><Profile size="32"/></NavLink></div>
  <div className='flex cart justify-center items-center'>
    <NavLink to='/cart'><ShoppingCart size="32"/></NavLink>
 {cartItems.length > 0 &&  <p className="counter flex justify-center items-center"><span>{cartItems.length}</span></p>}
  <article className='cart-details'>
    <div className="cart-items">
    {
 cartItems.length < 1 ? <p className='flex items-center justify-center'>
  Your shopping cart is empty!</p> :  cartItems.map(item=>{
    return <div className='my-5 px-4' key={item.id}>
    <img className='image' src={item.image} alt="" />
    <p className="name">{item.name}</p>
    <article className='flex gap-2 justify-center'>
  <div className="quantity flex items-center px-1 gap-2 justify-center" >
  <button onClick={()=>modifyCart({type:'DEC', id:item.id})} ><Minus size="16"/></button>
          <p> {item.quantity}</p>
  
  <button onClick={()=>modifyCart({type:'INC', id:item.id})} ><Add size="16" /></button>
  </div>

  
              </article>
    <p className="price">&#8358;{item.price * item.quantity}</p>
    <button onClick={()=>modifyCart({type:'REMOVE', details:item})}  className="remove"><Trash size="24"/></button>
    </div>
  })
 }
    </div>

{cartItems.length > 0 && <div className='px-3'>
  <div className='flex justify-end gap-5 total'><p className='total'>Total: <span>&#8358;{
    cartItems.reduce(
      (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity),
      0
    )
    }</span></p>
  
  </div>
  <div className='flex justify-end gap-5 py-5'>
  <p className='cart-option add'><NavLink to='/cart'>View Cart</NavLink></p>
    <p className='cart-option'>Checkout</p>
  </div>
</div>}


  </article>
  </div>
</div>


<div className="md:hidden ml-3 flex items-center" onClick={()=>menuToggle(true)}>
<HambergerMenu size="24" variant="TwoTone" className='menuBtn'/>
</div>

</nav>
      </header>
  )
}

export default Navbar
