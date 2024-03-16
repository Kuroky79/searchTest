// Cart.tsx

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItem } from '../actions/cartActions';
import '../styles.css';
import {CartItem} from "../reducers/types"; // Импортируем стили

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://dummyjson.com/carts/1')
            .then(response => response.json())
            .then(data => {
                // Обработка полученных данных
                console.log(data);
                setCartItems(data.products);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []); // Пустой массив зависимостей для выполнения запроса только один раз
    const handleDecrease = (itemId: number) => {
        dispatch(decreaseQuantity(itemId));
    };

    const handleIncrease = (itemId: number) => {
        dispatch(increaseQuantity(itemId));
    };

    const handleRemove = (itemId: number) => {
        dispatch(removeItem(itemId));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="left-column">
                <h2>Shopping Cart</h2>
                <div className="cart">
                    {cartItems.map(item => (
                        <div className="item" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} /> {/* Заменить thumbnail на image */}
                            <div className="item-details">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: {item.price} руб.</p>
                            </div>
                            <div className="actions">
                                <button onClick={() => handleDecrease(item.id)}>-</button>
                                <button onClick={() => handleIncrease(item.id)}>+</button>
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right-column">
            </div>
        </div>
    );
}

export default Cart;
