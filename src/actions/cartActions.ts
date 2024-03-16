// actions/cartActions.ts

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
