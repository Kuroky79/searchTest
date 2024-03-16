// App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Cart from './components/Cart/Cart';
import Total from './components/Total/Total';


const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <div className="left-column">
                    <Cart />
                </div>
                <div className="right-column">
                    <Total />
                </div>
            </div>
        </Provider>
    );
}

export default App;
