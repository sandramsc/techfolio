/* Designed & coded by Sandra Ashipala 20.03.2022 <https://github.com/sandramsc> */
import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();
    
    console.log('this is basket >>', basket);
    const addToBasket = () => {
        //dispatch item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price:price,
                rating: rating,
                image: image
            }

        })
    }
  return <div className='product'>
    <div className='product_info'>
        <p>{ title }</p>
        <p className='product_price'>
            <small>€</small>
            <strong>{price}</strong>
        </p>
        <div className='product_rating'>
            {Array(rating).fill().map((_, i) => (
                <p>⭐</p>
            ))}
        </div>
    </div>
    <img src={image} alt=''/>
   <button onClick={addToBasket}>Add to Basket</button>
    </div>;

}

export default Product;
