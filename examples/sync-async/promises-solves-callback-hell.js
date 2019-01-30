

const userId = 1;
getUserData(userId)
.then(getUserActiveCart)
.then(getUserCartItemsData)
.then(checkoutCartItems)
.catch(error)
