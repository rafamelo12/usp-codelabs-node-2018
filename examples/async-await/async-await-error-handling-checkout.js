


async function doCheckout(userId) {
    try {
        const userData = await getUserData(userId);
    } catch (errUserData) {
        // err handling
    }

    try {
        const userActiveCart = await getUserActiveCart(userData);
    } catch (errActiveCart) {
        // err handling
    }

    try {
        const cartItems = await getActiveCartItemsData(userActiveCart);    
    } catch (errCartItems) {
        // err handling
    }
    return await checkoutCartItems(cartItems);
}


