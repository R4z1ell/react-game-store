import axios from 'axios';

import { USER_SERVER } from '../../components/utils/misc';
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART_USER,
  GET_CART_ITEMS_USER,
  REMOVE_CART_ITEM_USER,
  ADD_TO_WISHLIST_USER,
  GET_WISHLIST_ITEMS_USER,
  REMOVE_WISHLIST_ITEM_USER,
  CLEAR_WISHLIST_DETAIL,
  UPDATE_DATA_USER,
  ON_SUCCESS_BUY_USER
} from './types';

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then(response => response.data);

  return {
    type: REGISTER_USER,
    payload: request
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then(response => response.data);

  return {
    type: LOGIN_USER,
    payload: request
  };
}

export function auth() {
  const request = axios
    .get(`${USER_SERVER}/auth`)
    .then(response => response.data);

  return {
    type: AUTH_USER,
    payload: request
  };
}

export function logoutUser() {
  const request = axios
    .get(`${USER_SERVER}/logout`)
    .then(response => response.data);

  return {
    type: LOGOUT_USER,
    payload: request
  };
}

export function addToCart(_id) {
  const request = axios
    .post(`${USER_SERVER}/addToCart?productId=${_id}`)
    .then(response => response.data);

  return {
    type: ADD_TO_CART_USER,
    payload: request
  };
}

export function getCartItems(cartItems) {
  const request = axios
    .get(`${USER_SERVER}/articles_by_id?id=${cartItems}`)
    .then(response => response.data);

  return {
    type: GET_CART_ITEMS_USER,
    payload: request
  };
}

export function removeCartItem(id) {
  const request = axios
    .get(`${USER_SERVER}/removeFromCart?_id=${id}`)
    .then(response => response.data);

  return {
    type: REMOVE_CART_ITEM_USER,
    payload: request
  };
}

export function addToWishlist(_id) {
  const request = axios
    .post(`${USER_SERVER}/addToWishlist?productId=${_id}`)
    .then(response => response.data);

  return {
    type: ADD_TO_WISHLIST_USER,
    payload: request
  };
}

export function getWishlistItems(wishlistItems) {
  const request = axios
    .get(`${USER_SERVER}/getWishlistItems?id=${wishlistItems}`)
    .then(response => response.data);

  return {
    type: GET_WISHLIST_ITEMS_USER,
    payload: request
  };
}

export function removeFromWishlist(id) {
  const request = axios
    .get(`${USER_SERVER}/removeFromWishlist?_id=${id}`)
    .then(response => response.data);

  return {
    type: REMOVE_WISHLIST_ITEM_USER,
    payload: request
  };
}

export const clearWishlistDetail = () => {
  return {
    type: CLEAR_WISHLIST_DETAIL,
    payload: ''
  };
};

export function updateUserData(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/update_profile`, dataToSubmit)
    .then(response => response.data);

  return {
    type: UPDATE_DATA_USER,
    payload: request
  };
}

export function onSuccessBuy(data) {
  const request = axios
    .post(`${USER_SERVER}/successBuy`, data)
    .then(response => response.data);

  return {
    type: ON_SUCCESS_BUY_USER,
    payload: request
  };
}
