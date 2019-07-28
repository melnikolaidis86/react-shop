export const addItemCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(carItem => carItem.id === cartItemToAdd.id);

    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItemToAdd, quantity: cartItem.quantity + 1}
                : cartItems
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1}]
};
