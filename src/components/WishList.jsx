import ItemCard from './ItemCard';
import { ArrowRight2, Like } from 'iconsax-react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';


function WishList({allItems,item,modifyCart, cartItems, 
  setProductPage, productPage, updateLike, like}) {


  return (
    <>
     <div className="banner">
      <img src='https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?w=740&t=st=1671039626~exp=1671040226~hmac=496706fc6ca96a7020f62cfe7c9c50d1e478c4aba8a4aec6f581038a8d855331'/>
       
       <article className='flex items-center justify-center'>
       <span>WishList</span>
       </article>
        </div>

        <div className='navigation mb-5 p-4'> <p className='container mx-auto flex items-center'>Home  <ArrowRight2 size="16"/> WishList</p></div>
    
      <section className="container mx-auto px-4 md:px-0 py-8">


<article className="">
<div className="flex justify-center flex-wrap gap-8 md:gap-1">
{
    
  like.length < 1 ? <div className='flex flex-col gap-5'>
  <p>No Item in WishList</p>
  <div className='flex justify-center'>
      <NavLink to='/' className='cart-option'>Back Home</NavLink>
  </div>
</div> : like.map(id=>{
        if(allItems.findIndex(el=>el.id === id) !== -1){
            let item = allItems[allItems.findIndex(el=>el.id === id)]
           return <ItemCard item={item} key={item.id} 
           modifyCart={modifyCart} updateLike={updateLike}
           setProductPage={setProductPage} productPage={productPage}/>
        }
    }) 
}

{

}
</div>

</article>
  </section></>

  )
}

export default WishList
