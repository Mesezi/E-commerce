import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

// import required modules
import { Navigation } from "swiper";
import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import { NavLink } from 'react-router-dom';


function Home({allItems, setAllItems,modifyCart, setProductPage, productPage, updateLike}) {
const[categoryItems, setCategoryItems] = useState('Men')
    return (
     <>
        <section className="">
        <Swiper
            slidesPerView={'auto'}
            modules={[Autoplay]} 
            autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        loop={true}
          > 
          <SwiperSlide><div className='hero'> 
            <div className='info'>
              <article className='container mx-auto px-4 md:px-0 flex items-center flex-col items-center justify-center gap-5'>
                   <h2>Summer Collection <span>2022</span></h2>
                   <p className='cart-option'>Read more</p>
              </article>
 
  </div>
  <img src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" alt="" />
 
            </div></SwiperSlide>


            <SwiperSlide><div className='hero'> 
            <div className='info'>
              <article className='container mx-auto px-4 md:px-0 flex flex-col items-center justify-center gap-5'>
                   <h2>New Year Sale <span>-70%</span></h2>
                   <div className='flex justify-center'><p className='cart-option'>Read more</p></div>
                   
              </article> 
 
  </div>
  <img src="https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?w=740&t=st=1671039626~exp=1671040226~hmac=496706fc6ca96a7020f62cfe7c9c50d1e478c4aba8a4aec6f581038a8d855331" alt="" />
 
            </div></SwiperSlide>


            <SwiperSlide>  <div className='hero'> 
            <div className='info'>
              <article className='container mx-auto px-4 md:px-0 flex flex-col items-center justify-center gap-5'>
                   <h2>Kids Clothing Clearance Sale <span>-50%</span></h2>
                   <div className='flex justify-center'><p className='cart-option'>Read more</p></div>
                   
              </article> 
 
  </div>
  <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
 
            </div></SwiperSlide>
          </Swiper>
            

            
            
    
        </section>
      
      <section className="category my-12 container mx-auto px-4 md:px-0">
        <NavLink to='./Men'>
            <p>MEN</p>
        <img src="https://img.freepik.com/free-photo/portrait-smiling-stylish-man-sunglasses-standing-against-brick-wall-modern-office_273443-3553.jpg?w=2000" alt="" />
        </NavLink>

        <NavLink to='./Kids'>
        <p>KIDS</p>
        <img src="https://img.freepik.com/free-photo/kids-fashion-style-childrens-wear-accessories-concept-serious-confident-african-american-boy-modeling-against-blank-wall-wearing-striped-jumper-pink-shades-his-head_343059-4497.jpg?w=740&t=st=1671035061~exp=1671035661~hmac=b5881bdacb6e2c55fee574e9542d4cd1d97862851a0440dbfa8a905e5ae48774" alt="" />
        </NavLink>

        <NavLink to='./Women'>
        <p>WOMEN</p>
        <img src="https://img.freepik.com/free-photo/bright-positive-fashion-studio-portrait-young-girl-with-nude-lips-bright-make-up-stylish-trendy-outfit-pink-skirt-smart-casual_496169-516.jpg?w=740&t=st=1671035479~exp=1671036079~hmac=b948c48032d6c01a89474d9df58422f5c8977580d6e1e8e820dafb0ebec4e820" alt="" />
        </NavLink>
        
      </section>

      <section className="new-arrivals my-12 container mx-auto px-4 md:px-0">
        <article className="heading flex justify-center">
            <span>New Arrivals</span>
        </article>

       <div className="items-slider py-3">
       <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            navigation={true} 
            modules={[Navigation, Autoplay]} 
            autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        loop={true}
          >
{
    allItems.map(item=>{
        if(item.new){
            return  <SwiperSlide key={item.id} > <ItemCard item={item}  updateLike={updateLike}
             modifyCart={modifyCart} setProductPage={setProductPage} productPage={productPage}/></SwiperSlide>   
        }
})
}
</Swiper>
       </div>

      </section>


      <section className="news-letter my-12">
<div className='flex flex-col gap-5 justify-center'>
  <h3 className='container mx-auto px-4'>Old School <br /> 
  <span>New Edition</span></h3>
  <div className=" flex container mx-auto px-4">
    <p className='cart-option'>Learn More</p>
  </div>
</div>
      </section>

      <section className='container my-12 mx-auto py-5 category-items px-4 md:px-0'>
<article className='flex gap-8 justify-center heading'>
  <p onClick={()=>{setCategoryItems('Men')}} className= {categoryItems === 'Men' ? 'active' : ''}>Men</p>
  <p onClick={()=>{setCategoryItems('Women')}} className={categoryItems === 'Women' ? 'active' : ''}>Women</p>
  <p onClick={()=>{setCategoryItems('Kids')}} className={categoryItems === 'Kids' ? 'active' : ''}>Kids</p>
</article>



{categoryItems === 'Men' &&<div className="items-slider py-3">
       <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            navigation={true} 
            modules={[Navigation]} 
          >
{
    allItems.map(item=>{
      if(item.category === 'Men'){
          return <SwiperSlide  key={item.id} ><ItemCard item={item}odifyCart={modifyCart}
          updateLike={updateLike} setProductPage={setProductPage} productPage={productPage}/></SwiperSlide> 
      }
})
}
</Swiper>
       </div> } 

       {categoryItems === 'Women' && <div className="items-slider py-3">
       <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            navigation={true} 
            modules={[Navigation]} 
          >
{
    allItems.map(item=>{
      if(item.category === 'Women'){
          return <SwiperSlide  key={item.id} ><ItemCard item={item} key={item.id} modifyCart={modifyCart}
          updateLike={updateLike} setProductPage={setProductPage} productPage={productPage}/></SwiperSlide> 
      }
})
}
</Swiper>
       </div> } 

       {categoryItems === 'Kids' &&<div className="items-slider py-3">
       <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            navigation={true} 
            modules={[Navigation]} 
          >
{
    allItems.map(item=>{
      if(item.category === 'Kids'){
          return <SwiperSlide  key={item.id} ><ItemCard item={item} modifyCart={modifyCart}
          updateLike={updateLike} setProductPage={setProductPage} productPage={productPage}/></SwiperSlide> 
      }
})
}
</Swiper>
       </div> } 


      </section>
        
     </> 
    )
  }
  
  export default Home
  