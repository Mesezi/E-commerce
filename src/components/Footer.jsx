import logo from '../assets/cover.png'
import { CallCalling, MessageText1 } from 'iconsax-react'

function Footer() {


    return (
     <footer className='py-12 flex flex-col gap-16 '>
<section className="container mx-auto px-4 md:px-0">
<img className='footer-logo' src={logo} alt="" />
<div className='flex gap-5 flex-col md:flex-row items-center justify-center'>
    <p className='flex gap-3'><span> <MessageText1/> </span> email@gmail.com</p>
    <p className='flex gap-3'><span><CallCalling/> </span> 08111108992</p>
</div>
</section>

<section className='container mx-auto px-4 md:px-0 flex gap-16 flex-wrap justify-between'>
<article className='grow'>
        <h4>Information</h4>
        <ul className='flex flex-col gap-3'>
            <li>About us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
        </ul>
    </article>

    <article className='grow'>
        <h4>My Account</h4>
        <ul className='flex flex-col gap-3'>
            <li>My Account</li>
            <li>Order History</li>
            <li>WishList</li>
            <li>NewsLetter</li>
        </ul>
    </article>

    <article className='grow'>
        <h4>News Letter</h4>
        <p>Add your e-mail addres to our newsletter to be always on time with all promotions.</p>
        <div className='flex gap-3 mt-5'>
            <input type="mail"/> <button className='cart-option'>Add</button>
        </div>

        <p className='mt-8 text-start  text-sm'>Copyright © 2023, Eden Apparel, All Rights Reserved.</p>

    </article>

   

</section>
     </footer>

    )
  }
  
  export default Footer
  