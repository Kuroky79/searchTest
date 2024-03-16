import {CartItem} from "../reducers/types";

export const decreaseQuantity = (id: number) => ({
    type: 'DECREASE_QUANTITY',
    payload: id
});

export const increaseQuantity = (id: number) => ({
    type: 'INCREASE_QUANTITY',
    payload: id
});

export const removeItem = (id: number) => ({
    type: 'REMOVE_ITEM',
    payload: id
});
export const SET_CART_ITEMS = 'SET_CART_ITEMS';

export const setCartItems = (items: CartItem[]): { type: typeof SET_CART_ITEMS; payload: CartItem[] } => ({
    type: SET_CART_ITEMS,
    payload: items,
});