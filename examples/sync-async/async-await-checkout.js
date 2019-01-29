


async function doCheckout(userId) {
	const userData = await getUserData(userId);
	const userActiveCart = await getUserActiveCart(userData);
	const cartItems = await getActiveCartItemsData(userActiveCart);
	return await checkoutCartItems(cartItems);
}


