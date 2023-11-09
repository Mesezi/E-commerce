import Navbar from './Navbar'
import { Facebook, Messages3, Instagram} from 'iconsax-react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer'
import { useSelector } from 'react-redux';

function Layout({children}) {
  const cartItems = useSelector(state => state.cartItems)
  const wishListItems = useSelector(state => state.wishListItems)

  useEffect(()=>{
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  },[cartItems])

  useEffect(()=>{
    sessionStorage.setItem('wishListItems', JSON.stringify(wishListItems));
  },[wishListItems])

    return (
      <>
      <article className="promo flex px-3 py-2">
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
 <Navbar />
 
 {
  children
 }
 
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
  
  export default Layout
  