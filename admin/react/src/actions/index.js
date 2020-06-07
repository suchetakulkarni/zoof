import * as types from '../constants/actionTypes';
import agent from '../agent';
export const closeDrawer = () => ({ type: types.CLOSE_DRAWER });

export const toggleDrawer = () => ({ type: types.TOGGLE_DRAWER });

export const setMobile = isMobile => ({
	type: types.SET_MOBILE,
	isMobile
});

export const login = token => ({ type: types.LOGIN, token });

export const logout = () => ({ type: types.LOGOUT });

const receiveProductsList = products => ({
	type: types.RECEIVE_PRODUCTS_LIST,
	products
});

export const getProductsList = () => {
	return async dispatch => {
		const products = await agent.getProductsList();
		if (products) {
			dispatch(receiveProductsList(products));
		}
	};
};
const receiveCategoriesList = categories => ({
	type: types.RECEIVE_CATEGORIES_LIST,
	Categories
});

export const getCategoriesList = () => {
	return async dispatch => {
		const categories = await agent.getCategoriesList();
		if (Categories) {
			dispatch(receiveCategoriesList(Categories));
		}
	};
};

const receiveOrdersList = (status, orders) => ({
	type: types.RECEIVE_ORDERS_LIST,
	status,
	orders
});

const receiveOrder = order => ({
	type: types.RECEIVE_ORDER,
	order
});

const receiveProductBegin = () => ({
	type: types.RECEIVE_PRODUCT_BEGIN
});

const receiveProductCompleted = product => ({
	type: types.RECEIVE_PRODUCT_COMPLETED,
	product
});

const receiveCategoryBegin = () => ({
	type: types.RECEIVE_CATEGORY_BEGIN
});

const receiveCategoryCompleted = category => ({
	type: types.RECEIVE_CATEGORY_COMPLETED,
	category
});

export const getOrdersList = status => {
	return async dispatch => {
		console.log('get orders');
		const orders = await agent.getOrdersList(status);
		console.log('orders:');
		console.log(orders);

		if (orders) {
			dispatch(receiveOrdersList(status, orders));
		}
	};
};

export const getOrder = orderId => {
	return async dispatch => {
		console.log('get order');
		const order = await agent.getOrder(orderId);
		console.log('order:');
		console.log(order);

		if (order) {
			dispatch(receiveOrder(order));
		}
	};
};

export const getProduct = productId => {
	return async dispatch => {
		dispatch(receiveProductBegin());
		console.log('get product');
		const product = await agent.getProduct(productId);
		console.log('product:');
		console.log(product);

		if (product) {
			dispatch(receiveProductCompleted(product));
		}
	};
};

export const getCategory = categoryId => {
	return async dispatch => {
		dispatch(receiveCategoryBegin());
		console.log('get category');
		const category = await agent.getCategory(categoryId);
		console.log('category:');
		console.log(category);

		if (category) {
			dispatch(receiveCategoryCompleted(category));
		}
	};
};

export const setOrderStatus = (orderId, newStatus) => {
	return async (dispatch, getState) => {
		await agent.setOrderStatus(orderId, newStatus);

		const state = getState();

		const currentStatus = state.ordersStatus;

		dispatch(getOrdersList(currentStatus));
	};
};
