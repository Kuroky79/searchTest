import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItem } from '../actions/cartActions';
import '../styles.css';
import { CartItem } from '../reducers/types';
import { setCartItems } from '../actions/cartActions';
const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cartItems); // Assuming cart items are stored in the state as 'cartItems'
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/carts/1')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(setCartItems(data.products)); // Dispatch action to set cart items
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

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
                    {cartItems.map((item: CartItem) => (
                        <div className="item" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
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
            <div className="right-column"></div>
        </div>
    );
}

export default Cart;
