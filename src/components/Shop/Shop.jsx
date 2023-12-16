import React, { useEffect, useState } from 'react';
import './Shop.css';
import Item from '../Item/Item';

const Shop = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    return (
        <div className='shop-container'>
            <div className="shop-item">
                <h1>here see all the product</h1>
                <div className='products'>
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
                </div>
            </div>
            <div className='cart-info'>
                <h3>Here you see all the cart info</h3>
            </div>
        </div>
    );
};

export default Shop;