package com.zosh.service;

import com.zosh.exception.ProductException;
import com.zosh.modal.Cart;
import com.zosh.modal.CartItem;
import com.zosh.modal.User;
import com.zosh.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public CartItem addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
