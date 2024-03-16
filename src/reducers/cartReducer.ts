interface CartItem {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    price: number;
    quantity: number;
}

const initialState: CartItem[] = [
    // Test data
    { id: 1, title: 'Product 1', description: 'Description of Product 1', thumbnail: 'product1.jpg', price: 100, quantity: 1 },
    { id: 2, title: 'Product 2', description: 'Description of Product 2', thumbnail: 'product2.jpg', price: 200, quantity: 2 },
];

type Action =
    | { type: 'SET_CART_ITEMS'; payload: CartItem[] }
    | { type: 'DECREASE_QUANTITY'; payload: number }
    | { type: 'INCREASE_QUANTITY'; payload: number }
    | { type: 'REMOVE_ITEM'; payload: number };


const cartReducer = (state = initialState, action: Action): CartItem[] => {
    switch(action.type) {
        case 'SET_CART_ITEMS':
            return action.payload;
        case 'DECREASE_QUANTITY':
            return state.map(item => item.id === action.payload ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item);
        case 'INCREASE_QUANTITY':
            return state.map(item => item.id === action.payload ? { ...item, quantity: Math.min(item.quantity + 1, 10) } : item);
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}


export default cartReducer;
