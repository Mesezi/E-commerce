import { ArrowRight2, Trash, Add, Minus } from "iconsax-react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <section className="login-page">
      <div className="banner">
        <article className="flex items-center justify-center">
          <span>Account Login</span>
        </article>
      </div>

      <div className="navigation mb-5 p-4">
        <p className="container mx-auto flex items-center">
          Home <ArrowRight2 size="16" /> Account <ArrowRight2 size="16" /> Login
        </p>
      </div>

      <article className="container mx-auto py-5 px-4 md:px-0">
        <div className="new-customer flex flex-col gap-4">
          <h3>New Customer</h3>
          <p className="font-medium">Register Account</p>
          <p>
            By creating an account you will be able to shop faster, be up to
            date on an order's status, and keep track of the orders you have
            previously made.
          </p>
          <div className="flex">
            <NavLink to="/register" className="cart-option">
              Continue
            </NavLink>
          </div>
        </div>

        <div className="returning-customer flex flex-col gap-4">
          <h3>Returning Customer</h3>
          <p className="font-medium">I am a returning customer</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail Address</label>
            <input type="mail" name="email" placeholder="E-mail Address" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>

          <p className="forgot">Forgotten Password</p>

          <div className="flex justify-end">
            <p className="cart-option">Login</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Login;
