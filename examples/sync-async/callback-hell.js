

const userId = 1;
getUserData(userId, function (err, userData) {
	if (err) console.error(err);
	getUserActiveCart(userData, function (err, userCart) {
		if (err) console.error(err);
		getUserCartItemsData(userCard.id, function (err, itemsData) {
			if (err) console.err(err);
			checkoutCartItems(itemsData, function (err, checkoutData) {
				...
			})
		});
	});
});


