'use client'
import  React,{ useContext } from "react";
import { ShopContext } from "../contextcart/contextcart";
import Link from "next/link";
import Image from "next/image";

export const CartItem : React.FC<{ products: any }> =(props) => {
  const product = props.products;
  const context = useContext(ShopContext);

  // Check if context is null
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = context;
  const cartItemCount = cartItems[product.id];
  return (
    <div>
    <div className="cardlist">
      <div className="card">
        <div className="product">
          <img src={product.image.url} style={{height:'250px',width:"250px"}} alt={product.name} />
          <div className="description">
            <Link href={'/productlist/' + product.id} ><p>{product.name}</p></Link>
             <p> ${product.price.raw}</p>
            <button className="cartbutton btn btn-primary" onClick={() => removeFromCart(product.id)}> - </button>
            <input className="cartinput" value={cartItems[product.id]} />
            <button className="cartbutton btn btn-primary" onClick={() => addToCart(product.id)}> + </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


