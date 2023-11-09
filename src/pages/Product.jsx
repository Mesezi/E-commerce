import { Heart, ArrowRight2 } from "iconsax-react";
import { useEffect, useMemo } from "react";
import {
  useLocation,
  useMatch,
  useParams,
  useSearchParams,
} from "react-router-dom";
import data from "../components/data";
import { inCart } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { updateWishListItem } from "../store/slices/wishListItemSlice";
import {
  decreaseCartItem,
  increaseCartItem,
  updateCartItem,
} from "../store/slices/cartItemSlice";

function Product() {
  const params = useParams();
  const product = useMemo(() => {
    return data.find((item) => item.id == params.id);
  }, [params]);
  const cartItems = useSelector((state) => state.cartItems);
  const wishListItems = useSelector((state) => state.wishListItems);
  const dispatch = useDispatch();

  useEffect(() => {
    let preview = document.querySelector(".preview");
    preview.src = `${product.image}`;
  }, [product]);

  function zoomIn(event) {
    let preview = document.querySelector(".preview");

    const x = event.clientX - event.target.offsetLeft;
    const y = event.clientY - event.target.offsetTop;

    preview.style.transformOrigin = `${x}px ${y}px`;
    preview.style.transform = "scale(1.4)";
  }

  return (
    <section className="product-page">
      <div className="banner">
        <img
          src={
            product.category === "Men"
              ? "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              : product.category === "Women"
              ? "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              : "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
          alt=""
        />

        <article className="flex items-center justify-center">
          <span>{product.name}</span>
        </article>
      </div>

      <div className="navigation mb-5 p-4">
        {" "}
        <p className="container mx-auto flex items-center">
          Home <ArrowRight2 size="16" /> {product.name}
        </p>
      </div>

      <article className="container mx-auto py-12 px-4 md:px-0">
        <div className="image_related">
          <div className="image-con">
            <img
              onMouseMove={(event) => {
                zoomIn(event);
              }}
              className="main-image"
              src={product.image}
              alt=""
            />
            <img src="" className="preview" alt="" />
          </div>

          <div className="related-products"></div>
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

            <div className="value flex flex-col gap-2 font-medium">
              <p>{product.name}</p>
              <p>{product.id}</p>
              <p>400</p>
              <p>In Stock</p>
            </div>
          </div>
          <hr></hr>

          <div className="price py-5">
            <h4>&#8358; {product.price}</h4>
            <p className="points">Price in reward points: 400</p>
          </div>

          <hr></hr>

          <div className="quantity_add flex flex-col gap-5 py-5">
            <div
              className={
                !inCart(cartItems, product.id)
                  ? "quantity disabled flex items-center px-1 justify-between"
                  : "quantity flex items-center px-1 justify-between"
              }
            >
              <button
                disabled={!inCart(cartItems, product.id)}
                onClick={() => dispatch(decreaseCartItem(product.id))}
              >
                -
              </button>
              <p>
                {cartItems.find((item) => item.id == product.id)?.quantity || 0}
              </p>

              <button
                disabled={!inCart(cartItems, product.id)}
                onClick={() => dispatch(increaseCartItem(product.id))}
              >
                +
              </button>
            </div>

            <div className="cart_wishlist flex flex-wrap gap-4">
              <button
                onClick={() => dispatch(updateCartItem(product))}
                className="cart-option add"
              >
                {inCart(cartItems, product.id)
                  ? " Remove from cart"
                  : "Add to cart"}
              </button>

              {
                <button
                  onClick={() => {
                    dispatch(updateWishListItem(product));
                  }}
                >
                  <Heart
                    size="32"
                    variant={
                        inCart(wishListItems, product.id) ? "Bold" : "Linear"
                    }
                  />
                </button>
              }
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Product;
