import {Heart, ShoppingCart} from 'iconsax-react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';


function ItemCard({item,modifyCart,  setProductPage, productPage, updateLike}) {
  return (
    <div className="flex item-card flex-col p-4">
    <NavLink to='/details' className='item-link' onClick={()=>{setProductPage(item)}}>
      <div className='flex flex-col item-offer p-3 gap-2'>
      {item.new && <span className='new'>new</span>}
      {item.slashedPrice && <span className='sale'>sale</span>}
      </div>
      
    <img className="item-image" src={item.image} alt="" />
    </NavLink>
  
  
  
  <div className="item-details my-4">
  <p className="item-name">{item.name}</p>
  <div className='flex gap-3 justify-center'> <p className="item-price">&#8358;{item.price}</p>
 {item.slashedPrice && <p className="slashed-price">&#8358;{item.slashedPrice}</p>}
  </div>
 
  </div>
  
  <div className="item-options flex my-0 md:my-4 justify-center gap-2 items-center">

  <button onClick={()=>modifyCart({type:'UPDATE', details:item, quantity:1})} className={item.inCart ? 'active' : ''}>
  <span className="tooltiptext">{item.inCart ? 'Remove from cart' : 'Add to Cart'}</span>
    <ShoppingCart size="32" variant={item.inCart ? 'Bold':'Linear'}/></button>

  <button onClick={()=>{updateLike(item.id)}} className={item.like ? 'active' : ''}>
  <span className="tooltiptext">{item.like ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
    <Heart size="32" variant={item.like ? 'Bold' : 'Linear'}/></button>
  </div>
  
  </div>
  )
}

export default ItemCard
