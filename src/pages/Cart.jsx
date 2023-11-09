import ItemCard from "../components/ItemCard";
import { ArrowRight2, Trash, Add, Minus } from "iconsax-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { decreaseCartItem, deleteCartItem, increaseCartItem } from "../store/slices/cartItemSlice";

function Cart() {
  const cartItems = useSelector(state=>state.cartItems)
  const dispatch = useDispatch()
  return (
    <>
      <div className="banner">
        <img src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />

        <article className="flex items-center justify-center">
          <span>Cart</span>
        </article>
      </div>

      <div className="navigation mb-5 p-4">
        {" "}
        <p className="container mx-auto px-4 flex items-center">
          Home <ArrowRight2 size="16" /> Cart
        </p>
      </div>

      {cartItems.length < 1 ? (
        <section className="container mx-auto px-4">
          <p>Your shopping cart is empty</p>
          <div className="flex justify-end mt-7">
            <p className="cart-option">Continue</p>
          </div>
        </section>
      ) : (
        <section className="container mx-auto p-4">
          <div className="cart-page flex flex-col gap-5">
            <div>
              <p className="font-medium">IMAGE</p>
              <p className="hidden md:block font-medium">PRODUCT NAME</p>
              <p className="hidden md:block font-medium">PRICE</p>
              <p className="font-medium">QUANTITY</p>
              <p className="font-medium">TOTAL</p>
            </div>
            <hr />

            {cartItems.map((item) => {
              return (
                <div key={item.id}>
                  <article className="">
                    {" "}
                    <img src={item.image} alt="" />
                    <p className="md:hidden font-medium">{item.name}</p>
                  </article>

                  <p className="hidden md:block">{item.name}</p>
                  <p className="hidden md:block">&#8358;{item.price}</p>

                  <article className="flex gap-2 justify-center">
                    <div className="quantity flex items-center px-1 gap-2 justify-center">
                      <button
                        onClick={() => dispatch*(increaseCartItem(item.id))}
                      >
                        <Minus size="16" />
                      </button>
                      <p> {item.quantity}</p>

                      <button
                        onClick={() => dispatch(decreaseCartItem(item.id))}
                      >
                        <Add size="16" />
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        dispatch(deleteCartItem(item))
                      }
                    >
                      <Trash size="16" />
                    </button>
                  </article>

                  <p className="font-medium">
                    &#8358;{item.quantity * item.price}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-8 md:pr-5 mt-8">
            <p className="text-end total">
              Total:{" "}
              <span>
                &#8358;
                {cartItems.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.price * currentValue.quantity,
                  0
                )}
              </span>
            </p>

            <article className="flex justify-between">
              <NavLink to="/">
                <p className="cart-option">Continue Shopping</p>
              </NavLink>
              <p className="cart-option add">Checkout</p>
            </article>
          </div>
        </section>
      )}
    </>
  );
}

export default Cart;
