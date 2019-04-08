import React from 'react';

export default React.createContext({
    products: [],
    cart: [],
    changeProductsList: products => {},
    enterCart: products => {},
});