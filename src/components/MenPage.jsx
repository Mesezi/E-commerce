import ItemCard from './ItemCard';
import { ArrowRight2 } from 'iconsax-react';
import { useEffect } from 'react';


function Men({allItems,item,modifyCart, cartItems, 
  setProductPage, productPage, updateLike}) {

let x = [...cartItems].reverse()


  return (
    <>
     <div className="banner">
      <img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
       
       <article className='flex items-center justify-center'>
       <span>Men</span>
       </article>
        </div>

        <div className='navigation mb-5 p-4'> <p className='container mx-auto flex items-center'>Home  <ArrowRight2 size="16"/>  Men</p></div>
    
      <section className="category-page container mx-auto py-8 px-4 md:px-0 ">
<article className='hidden md:flex flex-col gap-5'>
  <div>
    <h4 className='font-bold mb-4'>Category</h4>
    <div className='flex justify-between my-2'><p>Shirt</p> <span>(33)</span></div>
    <div className='flex justify-between my-2'><p>Shirt</p> <span>(33)</span></div>
    <div className='flex justify-between my-2'><p>Shirt</p> <span>(33)</span></div>
    <div className='flex justify-between my-2'><p>Shirt</p> <span>(33)</span></div>
    <div className='flex justify-between my-2'><p>Shirt</p> <span>(33)</span></div>
    <div className='flex justify-between my-2'><p>Shirt</p> <span>(33)</span></div>
  </div>

  <div>
    <h4 className='font-bold mb-4'>Price</h4>
    <p>Price: range</p>
    <div className="slidecontainer">
  {/* <input type="range" min="1" max="100" value="50" className="slider" id="myRange"></input> */}
</div>
  </div>

  <div>
    <h4 className='font-bold mb-4'>Shopping Cart</h4>

{cartItems.length < 1 ? <p>There are no items in your cart</p> : 

<div className='flex flex-col gap-4'>
  <p>There are <span className='font-bold'>{cartItems.length}</span> items in your cart</p>

  <p>Cart Subtotal:   <span className='font-bold'>&#8358;{
    cartItems.reduce(
      (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity),
      0
    )
    }</span>
</p>


  <div className='flex flex-col gap-4'>
    <p>Recently added Items</p>
    {
      x.length < 4 ? x.map(el=><div key={el.id} className='flex gap-3 side-cart'>
        <img src={el.image} alt="" />
        <div className='grow'> 
         <p className='font-bold'>{el.name}</p>
         <p>{el.quantity}x   &#8358;{el.price}</p>
         </div>
</div>
      ) : x.splice(0, 3).map(el=><div key={el.id}  className='flex gap-3 side-cart'>
         <img src={el.image} alt="" />
         <div className='grow'> 
         <p className='font-bold'>{el.name}</p>
         <p>{el.quantity}x   &#8358;{el.price}</p>
         </div>
          
        </div>
              )
    }
    </div>
</div>}

{cartItems.length > 0 && <div className=' mt-3 flex justify-end'>
<p className='cart-option inline-block'>Checkout</p>
</div>}

</div>

</article>


<article className="products">

<div className="flex">
  {/* <p>LIST</p> */}
</div>

<div className="product-list gap-6 md:gap-1">
{
    allItems.map(item=>{
        if(item.category === 'Men'){
            return <ItemCard item={item} key={item.id} updateLike={updateLike}
            modifyCart={modifyCart} setProductPage={setProductPage} productPage={productPage}/>
        }
})
}
</div>

</article>
  </section></>

  )
}

export default Men
