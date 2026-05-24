/* Designed & coded by Sandra Ashipala 20.03.2022 <https://github.com/sandramsc> */
import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import "./Checkout.css";
import checkoutAd from './images/checkout_ad.jpg';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

  return (<div className='checkout'>
      <div className='checkout_left'>
          <img src={checkoutAd} alt=''/>
          <div>
         {/* <h3>Hello, {user.email}</h3> */}
             <h2 className='checkout_title'>Your Shopping Basket</h2>
             
             {basket.map(item => (
              <CheckoutProduct 
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              />
          ))}
          </div>
      </div>
      <div className='checkout_right'>
          <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
