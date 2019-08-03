export const addItemCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(carItem => carItem.id === cartItemToAdd.id);

    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItemToAdd, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    );
};
