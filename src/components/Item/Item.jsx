import React from 'react';
import './Item.css';

const Item = (props) => {
    const {img, price, name, ratings, seller} = props.item;
    return (
        <div className='item'>
                <img src={img} alt="" />
            <div className='item-info'>
                <p>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <div className='rating-info'>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Item;