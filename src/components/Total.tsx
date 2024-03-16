import React from 'react';
import { useSelector } from 'react-redux';
import {RootState} from "../reducers";

const Total: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cartItems);
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="total">
            <h2>Total</h2>
            <p>Итого: {total} руб.</p>
        </div>
    );
}

export default Total;
