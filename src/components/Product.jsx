import {Heart, ArrowRight2} from 'iconsax-react';
import { useEffect } from 'react';


function Product({allItems, setAllItems,modifyCart, cartItems,setProductPage, productPage, updateLike}) {

    useEffect(()=>{
        let preview = document.querySelector('.preview')
        console.log(preview)
        preview.src = `${productPage.image}`
    },[])

    function zoomIn(event) {
        let preview = document.querySelector('.preview')

        const x = event.clientX - event.target.offsetLeft;
        const y = event.clientY - event.target.offsetTop;

        preview.style.transformOrigin = `${x}px ${y}px`;
        preview.style.transform = "scale(1.4)";
      }
    

    return (
     <section className="product-page">
            <div className="banner">
      <img src={productPage.category === 'Men' ? "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      : productPage.category === 'Women' ? 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' : 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} alt="" />
       
       <article className='flex items-center justify-center'>
       <span>{productPage.name}</span>
       </article>
        </div>

        <div className='navigation mb-5 p-4'> <p className='container mx-auto flex items-center'>
            Home  <ArrowRight2 size="16"/>  {productPage.name}</p></div>

        <article className="container mx-auto py-12 px-4 md:px-0">
        <div className="image_related">
                <div className='image-con'>
                    <img onMouseMove={(event)=>{zoomIn(event)}} className='main-image' src={productPage.image} alt="" />
                    <img src="" className='preview' alt="" />
                </div>
                
                <div className="related-products">

                </div>
            </div>

            <div>
                <div className="review py-8">
                    <p>0 review | Write a review</p>
                </div>
                <hr></hr>

                <div className="details py-8 flex gap-5">
                    <div className="title flex flex-col gap-2">
                        <p>Brand:</p>
                        <p>Product Code:</p>
                        <p>Reward Points:</p>
                        <p>Availability:</p>
                    </div>

                    <div className="value flex flex-col gap-2 font-bold">
                        <p>{productPage.name}</p>
                        <p>{productPage.id}</p>
                        <p>400</p>
                        <p>In Stock</p>
                    </div>
                </div>
                <hr></hr>

                <div className="price py-5">
                    <h4>&#8358; {productPage.price}</h4>
                    <p className="points">Price in reward points: 400</p>
                </div>

                <hr></hr>

                <div className="quantity_add flex flex-col gap-5 py-5">

                    

<div className={cartItems.findIndex(object => { return object.id === productPage.id}) === -1 ? 'quantity disabled flex items-center px-1 justify-between' :
'quantity flex items-center px-1 justify-between'} >

<button disabled={cartItems.findIndex(object => { return object.id === productPage.id}) === -1 && true} 
onClick={()=>modifyCart({type:'DEC', id:productPage.id})} >-</button>
        <p> {cartItems.findIndex(object => { return object.id === productPage.id; }) === -1 ? 1 : 
        cartItems[cartItems.findIndex(object => { return object.id === productPage.id; })].quantity}</p>

<button disabled={cartItems.findIndex(object => { return object.id === productPage.id}) === -1 && true} 
onClick={()=>modifyCart({type:'INC', id:productPage.id})} >+</button>
</div>
                   

                    <div className="cart_wishlist flex flex-wrap gap-4">
                    {allItems[allItems.findIndex(object => { return object.id === productPage.id; })].inCart ? 
                    <button onClick={()=>modifyCart({type:'UPDATE', details:productPage})} className='cart-option' >Remove from cart</button> : 
                  <button onClick={()=>modifyCart({type:'UPDATE', details:productPage, quantity: 1})} className='cart-option add' >Add to cart</button>}

                    {<button onClick={()=>{updateLike(productPage.id)}} ><Heart size="32" variant={allItems[allItems.findIndex(object =>
                     { return object.id === productPage.id; })].like ? 'Bold' : 'Linear'}/></button>} 

                    </div>
                </div>

            </div>
            </article>


     </section>
    )
  }
  
  export default Product
  