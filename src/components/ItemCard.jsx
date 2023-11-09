import { Heart, ShoppingCart } from "iconsax-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateCartItem } from "../store/slices/cartItemSlice";
import { inCart } from "../utils";
import { updateWishListItem } from "../store/slices/wishListItemSlice";

function ItemCard({ item }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const wishListItems = useSelector((state) => state.wishListItems);

  return (
    <div className="flex item-card flex-col p-4">
      <NavLink
        to={`/${item.category}/${item.id}`}
        className="item-link"
      >
        <div className="flex flex-col item-offer p-3 gap-2">
          {item.new && <span className="new">new</span>}
          {item.slashedPrice && <span className="sale">sale</span>}
        </div>

        <img className="item-image" src={item.image} alt="" />
      </NavLink>

      <div className="item-details my-4">
        <p className="item-name">{item.name}</p>
        <div className="flex gap-3 justify-center">
          {" "}
          <p className="item-price">&#8358;{item.price}</p>
          {item.slashedPrice && (
            <p className="slashed-price">&#8358;{item.slashedPrice}</p>
          )}
        </div>
      </div>

      <div className="item-options flex my-0 md:my-4 justify-center gap-2 items-center">
        <button
          onClick={() => dispatch(updateCartItem(item))}
          className={item.inCart ? "active" : ""}
        >
          <span className="tooltiptext">
            {inCart(cartItems, item.id) ? "Remove from cart" : "Add to Cart"}
          </span>
          <ShoppingCart
            size="32"
            variant={inCart(cartItems, item.id) ? "Bold" : "Linear"}
          />
        </button>

        <button
          onClick={() => dispatch(updateWishListItem(item))}
          className={item.like ? "active" : ""}
        >
          <span className="tooltiptext">
            {inCart(wishListItems, item.id)
              ? "Remove from Wishlist"
              : "Add to Wishlist"}
          </span>
          <Heart
            size="32"
            variant={inCart(wishListItems, item.id) ? "Bold" : "Linear"}
          />
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
