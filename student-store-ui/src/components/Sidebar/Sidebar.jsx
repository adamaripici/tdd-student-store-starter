import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import arrowForward from "/assets/arrowForward1.png"

export default function Sidebar({ shoppingCart, products=[], checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle}) {
  const [isOpen, setOpen] = React.useState(false); //whether sidebar.jsx is in the open or closed state
  // change isopen state from false to true and true to false
  let sidebarClass = isOpen ? "sidebar open" : "sidebar closed"
  const sideBarClick = () => {
    //condition checking to change state from true to false and vice versa
    isOpen ? setOpen(false) : setOpen(true);
  };
  
  return (
    <section className={sidebarClass}>
      <button className="toggle-button" onClick={sideBarClick}>
        <img src={arrowForward}
          alt = "arrow"
        />
      </button>
      {isOpen ? 
      <ShoppingCart isOpen={isOpen} shoppingCart={shoppingCart} products={products}></ShoppingCart>: null}
    </section>
  )
}
